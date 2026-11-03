package com.example

import android.Manifest
import android.accounts.Account
import android.accounts.AccountManager
import android.annotation.SuppressLint
import android.app.Activity
import android.app.backup.BackupManager
import android.content.ContentValues
import android.content.ClipData
import android.content.Context
import android.content.Intent
import android.content.pm.PackageManager
import android.graphics.Bitmap
import android.graphics.BitmapFactory
import android.graphics.pdf.PdfDocument
import android.graphics.RectF
import android.net.Uri
import android.net.http.SslError
import android.os.Build
import android.os.Bundle
import android.os.Environment
import android.os.Handler
import android.os.Looper
import android.os.VibrationEffect
import android.os.Vibrator
import android.os.VibratorManager
import android.provider.MediaStore
import android.util.Base64
import android.util.Log
import android.view.ViewGroup
import android.webkit.*
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.BackHandler
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.result.IntentSenderRequest
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.safeDrawingPadding
import androidx.compose.material3.Surface
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.viewinterop.AndroidView
import androidx.core.content.ContextCompat
import androidx.core.content.FileProvider
import androidx.webkit.WebViewAssetLoader
import com.google.android.gms.auth.api.identity.AuthorizationRequest
import com.google.android.gms.auth.api.identity.ClearTokenRequest
import com.google.android.gms.auth.api.identity.Identity
import com.google.android.gms.auth.api.identity.RevokeAccessRequest
import com.google.android.gms.common.api.Scope
import com.google.android.gms.tasks.Tasks
import com.example.ui.theme.AluminiumCalculatorTheme
import com.google.mlkit.vision.common.InputImage
import com.google.mlkit.vision.text.TextRecognition
import com.google.mlkit.vision.text.latin.TextRecognizerOptions
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody
import org.json.JSONArray
import org.json.JSONObject
import java.io.File
import java.io.OutputStream
import java.util.concurrent.TimeUnit

class MainActivity : ComponentActivity() {

    private data class PendingDriveOperation(
        val type: DriveOperationType,
        val accountEmail: String,
        val operationId: String,
        val backupJson: String? = null,
        val retryingAfterExpiredToken: Boolean = false
    )

    private enum class DriveOperationType { BACKUP, RESTORE }

    internal data class DriveResponse<out T>(
        val value: T? = null,
        val error: String? = null,
        val httpCode: Int? = null
    ) {
        val isSuccess: Boolean get() = error == null && value != null
    }

    private data class DriveOperationResult(
        val success: Boolean,
        val message: String,
        val fileId: String? = null,
        val backupJson: String? = null,
        val httpCode: Int? = null,
        val verified: Boolean = false
    )

    private var androidBridge: AndroidBridge? = null
    private var pendingDriveOperation: PendingDriveOperation? = null
    private val completedDriveOperationIds = mutableSetOf<String>()
    private val driveOperationHandler = Handler(Looper.getMainLooper())
    private val driveAuthorizationResultOperationIds = java.util.ArrayDeque<String>()
    private var driveOperationTimeout: Runnable? = null
    private val driveOperationTimeoutMs = 170_000L
    private val driveAppDataScope = "https://www.googleapis.com/auth/drive.appdata"

    private var filePathCallback: ValueCallback<Array<Uri>>? = null
    private var cameraPhotoUri: Uri? = null
    private var webViewInstance: WebView? = null

    private val driveAuthorizationLauncher = registerForActivityResult(
        ActivityResultContracts.StartIntentSenderForResult()
    ) { result ->
        val authorizationOperationId = driveAuthorizationResultOperationIds.pollFirst()
            ?: return@registerForActivityResult
        val operation = pendingDriveOperation?.takeIf { it.operationId == authorizationOperationId }
            ?: return@registerForActivityResult
        if (result.resultCode != Activity.RESULT_OK || result.data == null) {
            finishDriveOperation(operation, DriveOperationResult(false, "Google authorization was cancelled."))
            return@registerForActivityResult
        }
        try {
            val authorizationResult = Identity.getAuthorizationClient(this)
                .getAuthorizationResultFromIntent(result.data!!)
            val token = authorizationResult.accessToken
            if (token.isNullOrBlank()) {
                finishDriveOperation(operation, DriveOperationResult(false, "Google did not return Drive access."))
            } else {
                executeDriveOperation(operation, token)
            }
        } catch (e: Exception) {
            Log.e("GoogleDrive", "Authorization result could not be read", e)
            finishDriveOperation(operation, DriveOperationResult(false, driveErrorMessage(e)))
        }
    }

    val accountPickerLauncher = registerForActivityResult(
        ActivityResultContracts.StartActivityForResult()
    ) { result ->
        val accountName = result.data?.getStringExtra(AccountManager.KEY_ACCOUNT_NAME)
        if (!accountName.isNullOrEmpty()) {
            getSharedPreferences("thai_backup_prefs", Context.MODE_PRIVATE)
                .edit().putString("selected_account", accountName).apply()
            webViewInstance?.evaluateJavascript(
                "if (typeof window.onGoogleAccountSelected === 'function') { window.onGoogleAccountSelected(${JSONObject.quote(accountName)}); }",
                null
            )
        } else {
            webViewInstance?.evaluateJavascript(
                "if (typeof window.onGoogleAccountSelected === 'function') { window.onGoogleAccountSelected(null); }",
                null
            )
        }
    }

    private val filePickerLauncher = registerForActivityResult(
        ActivityResultContracts.GetMultipleContents()
    ) { uris ->
        val uriArray = uris.toTypedArray()
        filePathCallback?.onReceiveValue(if (uriArray.isNotEmpty()) uriArray else null)
        filePathCallback = null
    }

    val generalFilePickerLauncher = registerForActivityResult(
        ActivityResultContracts.StartActivityForResult()
    ) { result ->
        if (result.resultCode == Activity.RESULT_OK && result.data != null) {
            val uris = mutableListOf<Uri>()
            result.data?.data?.let { uris.add(it) }
            val clipData = result.data?.clipData
            if (clipData != null) {
                for (i in 0 until clipData.itemCount) {
                    uris.add(clipData.getItemAt(i).uri)
                }
            }
            val uriArray = uris.distinct().toTypedArray()
            filePathCallback?.onReceiveValue(if (uriArray.isNotEmpty()) uriArray else null)
        } else {
            filePathCallback?.onReceiveValue(null)
        }
        filePathCallback = null
    }

    val restoreFilePickerLauncher = registerForActivityResult(
        ActivityResultContracts.StartActivityForResult()
    ) { result ->
        if (result.resultCode == Activity.RESULT_OK && result.data != null) {
            val uri = result.data?.data
            if (uri != null) {
                try {
                    val content = contentResolver.openInputStream(uri)?.bufferedReader()?.use { it.readText() } ?: ""
                    var fileName = "backup.json"
                    try {
                        contentResolver.query(uri, null, null, null, null)?.use { cursor ->
                            val nameIndex = cursor.getColumnIndex(android.provider.OpenableColumns.DISPLAY_NAME)
                            if (nameIndex != -1 && cursor.moveToFirst()) {
                                fileName = cursor.getString(nameIndex)
                            }
                        }
                    } catch (_: Exception) {}
                    val escapedContent = JSONObject.quote(content)
                    val escapedName = JSONObject.quote(fileName)
                    webViewInstance?.evaluateJavascript(
                        "if (typeof window.onBackupFileSelected === 'function') { window.onBackupFileSelected($escapedContent, $escapedName); }",
                        null
                    )
                } catch (e: Exception) {
                    Log.e("MainActivity", "Failed to read backup file", e)
                    Toast.makeText(this, "Failed to read backup file: ${e.message}", Toast.LENGTH_SHORT).show()
                }
            }
        }
    }

    private val takePictureLauncher = registerForActivityResult(
        ActivityResultContracts.TakePicture()
    ) { success ->
        if (success && cameraPhotoUri != null) {
            filePathCallback?.onReceiveValue(arrayOf(cameraPhotoUri!!))
        } else {
            filePathCallback?.onReceiveValue(null)
        }
        filePathCallback = null
    }

    private val requestCameraPermissionLauncher = registerForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { isGranted ->
        if (isGranted) {
            launchCameraCapture()
        } else {
            Toast.makeText(this, "Camera permission required for camera scan", Toast.LENGTH_SHORT).show()
            filePickerLauncher.launch("image/*")
        }
    }

    private fun launchCameraCapture() {
        try {
            val photoFile = File.createTempFile("scan_camera_", ".jpg", cacheDir)
            val uri = FileProvider.getUriForFile(
                this,
                "${applicationContext.packageName}.fileprovider",
                photoFile
            )
            cameraPhotoUri = uri
            takePictureLauncher.launch(uri)
        } catch (e: Exception) {
            Log.e("MainActivity", "Failed to launch camera capture", e)
            filePickerLauncher.launch("image/*")
        }
    }

    private fun requestDriveBackup(backupJson: String, accountEmail: String, operationId: String) {
        runOnUiThread {
            if (operationId in completedDriveOperationIds) return@runOnUiThread
            if (!isValidBackupJson(backupJson)) {
                deliverDriveResultOnce(operationId, DriveOperationResult(false, "The backup data is invalid or empty."), DriveOperationType.BACKUP)
                return@runOnUiThread
            }
            beginDriveOperation(PendingDriveOperation(
                type = DriveOperationType.BACKUP,
                accountEmail = accountEmail,
                operationId = operationId,
                backupJson = backupJson
            ))
        }
    }

    private fun requestDriveRestore(accountEmail: String, operationId: String) {
        runOnUiThread {
            beginDriveOperation(PendingDriveOperation(
                type = DriveOperationType.RESTORE,
                accountEmail = accountEmail,
                operationId = operationId
            ))
        }
    }

    private fun beginDriveOperation(operation: PendingDriveOperation) {
        try {
            if (operation.operationId in completedDriveOperationIds) return
            if (pendingDriveOperation?.operationId == operation.operationId) return
            if (pendingDriveOperation != null) {
                deliverDriveResultOnce(operation.operationId, DriveOperationResult(false, "A Google Drive action is already in progress."), operation.type)
                return
            }
            if (driveAuthorizationResultOperationIds.isNotEmpty()) {
                deliverDriveResultOnce(operation.operationId, DriveOperationResult(false, "A previous Google authorization is still open. Close it and retry."), operation.type)
                return
            }
            val savedAccount = getSharedPreferences("thai_backup_prefs", Context.MODE_PRIVATE)
                .getString("selected_account", "").orEmpty()
            val selectedAccount = operation.accountEmail.trim().ifEmpty { savedAccount }
            if (selectedAccount.isEmpty()) {
                deliverDriveResultOnce(operation.operationId, DriveOperationResult(false, "Select a Google account first."), operation.type)
                return
            }
            val queued = operation.copy(accountEmail = selectedAccount)
            pendingDriveOperation = queued
            val timeout = Runnable {
                if (pendingDriveOperation?.operationId == queued.operationId) {
                    finishDriveOperation(queued, DriveOperationResult(false, "Google Drive operation timed out."))
                }
            }
            driveOperationTimeout = timeout
            if (!driveOperationHandler.postDelayed(timeout, driveOperationTimeoutMs)) {
                driveOperationTimeout = null
                pendingDriveOperation = null
                deliverDriveResultOnce(operation.operationId, DriveOperationResult(false, "Could not start the Google Drive operation timeout."), operation.type)
                return
            }
            authorizeDriveOperation(queued)
        } catch (e: Exception) {
            Log.e("GoogleDrive", "Could not start Drive authorization", e)
            val active = pendingDriveOperation?.takeIf { it.operationId == operation.operationId }
            if (active != null) finishDriveOperation(active, DriveOperationResult(false, driveErrorMessage(e)))
            else deliverDriveResultOnce(operation.operationId, DriveOperationResult(false, driveErrorMessage(e)), operation.type)
        }
    }

    private fun authorizeDriveOperation(operation: PendingDriveOperation) {
        if (pendingDriveOperation?.operationId != operation.operationId) return
        try {
            pendingDriveOperation = operation
            val request = AuthorizationRequest.builder()
                .setRequestedScopes(listOf(Scope(driveAppDataScope)))
                .setAccount(Account(operation.accountEmail, "com.google"))
                .build()

            Identity.getAuthorizationClient(this)
                .authorize(request)
                .addOnSuccessListener { result ->
                    if (pendingDriveOperation?.operationId != operation.operationId) return@addOnSuccessListener
                    try {
                        if (result.hasResolution()) {
                            val pendingIntent = result.pendingIntent
                            if (pendingIntent == null) {
                                finishDriveOperation(operation, DriveOperationResult(false, "Google authorization needs user approval, but no approval screen was returned."))
                            } else {
                                try {
                                    driveAuthorizationResultOperationIds.addLast(operation.operationId)
                                    driveAuthorizationLauncher.launch(
                                        IntentSenderRequest.Builder(pendingIntent.intentSender).build()
                                    )
                                } catch (e: Exception) {
                                    driveAuthorizationResultOperationIds.removeLastOccurrence(operation.operationId)
                                    Log.e("GoogleDrive", "Could not open Google authorization screen", e)
                                    finishDriveOperation(operation, DriveOperationResult(false, driveErrorMessage(e)))
                                }
                            }
                        } else {
                            val token = result.accessToken
                            if (token.isNullOrBlank()) {
                                finishDriveOperation(operation, DriveOperationResult(false, "Google did not return Drive access."))
                            } else {
                                executeDriveOperation(operation, token)
                            }
                        }
                    } catch (e: Exception) {
                        Log.e("GoogleDrive", "Could not process Drive authorization", e)
                        finishDriveOperation(operation, DriveOperationResult(false, driveErrorMessage(e)))
                    }
                }
                .addOnFailureListener { error ->
                    if (pendingDriveOperation?.operationId != operation.operationId) return@addOnFailureListener
                    Log.e("GoogleDrive", "Drive authorization failed", error)
                    finishDriveOperation(operation, DriveOperationResult(false, driveErrorMessage(error)))
                }
        } catch (e: Exception) {
            Log.e("GoogleDrive", "Could not start Drive authorization", e)
            finishDriveOperation(operation, DriveOperationResult(false, driveErrorMessage(e)))
        }
    }

    private fun executeDriveOperation(operation: PendingDriveOperation, token: String) {
        try {
            CoroutineScope(Dispatchers.IO).launch {
            val result = try {
                when (operation.type) {
                    DriveOperationType.BACKUP -> {
                        val json = operation.backupJson.orEmpty()
                        val upload = androidBridge?.uploadBackupToDrive(token, json)
                            ?: DriveResponse(error = "Google Drive service is unavailable.")
                        if (!upload.isSuccess) {
                            DriveOperationResult(false, upload.error ?: "Google Drive upload failed.", httpCode = upload.httpCode)
                        } else {
                            DriveOperationResult(true, "Backup uploaded and verified in Google Drive.", fileId = upload.value, verified = true)
                        }
                    }
                    DriveOperationType.RESTORE -> {
                        val download = androidBridge?.downloadBackupFromDrive(token)
                            ?: DriveResponse(error = "Google Drive service is unavailable.")
                        val json = download.value
                        if (!download.isSuccess || json.isNullOrBlank()) {
                            DriveOperationResult(false, download.error ?: "No valid backup was found in Google Drive.", httpCode = download.httpCode)
                        } else if (!isValidBackupJson(json)) {
                            DriveOperationResult(false, "The Google Drive backup is not a supported app backup.")
                        } else {
                            DriveOperationResult(true, "Google Drive backup downloaded and validated.", backupJson = json, verified = true)
                        }
                    }
                }
            } catch (e: Exception) {
                Log.e("GoogleDrive", "Drive operation failed", e)
                DriveOperationResult(false, driveErrorMessage(e))
            }

                runOnUiThread {
                    if (pendingDriveOperation?.operationId != operation.operationId) return@runOnUiThread
                    if (result.httpCode == 401 && !operation.retryingAfterExpiredToken) {
                        try {
                            Identity.getAuthorizationClient(this@MainActivity)
                                .clearToken(ClearTokenRequest.builder().setToken(token).build())
                                .addOnSuccessListener {
                                    if (pendingDriveOperation?.operationId == operation.operationId) {
                                        authorizeDriveOperation(operation.copy(retryingAfterExpiredToken = true))
                                    }
                                }
                                .addOnFailureListener { error ->
                                    Log.e("GoogleDrive", "Could not clear an expired Drive token", error)
                                    finishDriveOperation(operation, DriveOperationResult(false, "Google authorization expired. Reconnect your account and try again."))
                                }
                        } catch (e: Exception) {
                            Log.e("GoogleDrive", "Could not retry Drive authorization", e)
                            finishDriveOperation(operation, DriveOperationResult(false, driveErrorMessage(e)))
                        }
                    } else {
                        if (result.success && operation.type == DriveOperationType.BACKUP) {
                            try {
                                androidBridge?.cacheRemoteBackup(operation.backupJson.orEmpty(), operation.accountEmail)
                                getSharedPreferences("thai_backup_prefs", Context.MODE_PRIVATE)
                                    .edit()
                                    .putString("selected_account", operation.accountEmail)
                                    .putString("drive_file_id", result.fileId)
                                    .putLong("drive_last_sync", System.currentTimeMillis())
                                    .apply()
                            } catch (e: Exception) {
                                Log.w("GoogleDrive", "Could not update local verified backup metadata", e)
                            }
                        }
                        finishDriveOperation(operation, result)
                    }
                }
            }
        } catch (e: Exception) {
            Log.e("GoogleDrive", "Could not start Drive request", e)
            runOnUiThread {
                finishDriveOperation(operation, DriveOperationResult(false, driveErrorMessage(e)))
            }
        }
    }

    private fun finishDriveOperation(operation: PendingDriveOperation, result: DriveOperationResult) {
        if (pendingDriveOperation?.operationId != operation.operationId) return
        driveOperationTimeout?.let { driveOperationHandler.removeCallbacks(it) }
        driveOperationTimeout = null
        pendingDriveOperation = null
        deliverDriveResultOnce(operation.operationId, result, operation.type)
    }

    private fun deliverDriveResultOnce(operationId: String, result: DriveOperationResult, type: DriveOperationType) {
        if (!completedDriveOperationIds.add(operationId)) return
        deliverDriveResult(operationId, result, type)
    }

    private fun deliverDriveResult(operationId: String, result: DriveOperationResult, type: DriveOperationType) {
        val payload = JSONObject().apply {
            put("operationId", operationId)
            put("success", result.success)
            put("message", result.message)
            put("verified", result.verified)
            result.fileId?.let { put("fileId", it) }
            result.backupJson?.let { put("data", it) }
            result.httpCode?.let { put("httpCode", it) }
        }.toString()
        val callbackName = if (type == DriveOperationType.BACKUP) "onDriveBackupResult" else "onDriveRestoreResult"
        try {
            webViewInstance?.evaluateJavascript(
                "if (typeof window.$callbackName === 'function') { window.$callbackName(${JSONObject.quote(payload)}); }",
                null
            )
        } catch (e: Exception) {
            Log.e("GoogleDrive", "Could not deliver Drive operation callback", e)
        }
    }

    private fun driveErrorMessage(error: Throwable): String {
        val detail = error.message?.trim().orEmpty().ifEmpty { error.javaClass.simpleName }
        return detail.take(240)
    }

    private fun isValidBackupJson(backupJson: String): Boolean {
        if (backupJson.isBlank() || backupJson.length > 20_000_000) return false
        return try {
            val trimmed = backupJson.trim()
            if (trimmed.startsWith("[")) {
                val array = JSONArray(trimmed)
                array.length() > 0 && array.optJSONObject(0)?.let { it.has("results") || it.has("name") } == true
            } else {
                val obj = JSONObject(trimmed)
                val hasKnownData = listOf("customers", "clients", "customerList", "history", "jobs", "records", "workHistory", "calculator", "base8Tape", "tape", "storageDump")
                    .any(obj::has)
                hasKnownData &&
                    (!obj.has("customers") || obj.opt("customers") is JSONArray) &&
                    (!obj.has("history") || obj.opt("history") is JSONArray) &&
                    (!obj.has("storageDump") || obj.opt("storageDump") is JSONObject) &&
                    (!obj.has("calculator") || obj.isNull("calculator") || obj.opt("calculator") is JSONObject)
            }
        } catch (_: Exception) {
            false
        }
    }

    private fun revokeDriveAuthorization(accountEmail: String) {
        val account = accountEmail.trim()
        getSharedPreferences("thai_backup_prefs", Context.MODE_PRIVATE)
            .edit().remove("selected_account").apply()
        if (account.isEmpty()) return
        val request = RevokeAccessRequest.builder()
            .setAccount(Account(account, "com.google"))
            .setScopes(listOf(Scope(driveAppDataScope)))
            .build()
        Identity.getAuthorizationClient(this)
            .revokeAccess(request)
            .addOnFailureListener { error ->
                Log.w("GoogleDrive", "Could not revoke Drive authorization (${error.javaClass.simpleName})")
            }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        // Clear any residual active calculator state so app starts with blank inputs
        try {
            getSharedPreferences("thai_app_storage", Context.MODE_PRIVATE)
                .edit()
                .remove("thai_active_calculator")
                .apply()
        } catch (_: Exception) {}

        setContent {
            AluminiumCalculatorTheme {
                Surface(
                    modifier = Modifier
                        .fillMaxSize()
                        .safeDrawingPadding(),
                    color = Color(0xFFF8FAFC)
                ) {
                    AppWebView()
                }
            }
        }
    }

    @Suppress("DEPRECATION")
    private fun finishWithoutExitTransition() {
        finish()
        overridePendingTransition(0, 0)
    }

    @SuppressLint("SetJavaScriptEnabled")
    @Composable
    fun AppWebView() {
        var currentWebView by remember { mutableStateOf<WebView?>(null) }

        BackHandler(enabled = true) {
            val wv = currentWebView ?: webViewInstance
            if (wv == null) {
                finishWithoutExitTransition()
                return@BackHandler
            }
            wv.evaluateJavascript(
                "(function(){ try { if (typeof window.handleAndroidBack === 'function') { return window.handleAndroidBack(); } } catch(e){} return 'unhandled'; })()"
            ) { result ->
                val clean = result?.replace("\"", "")?.trim() ?: "unhandled"
                if (clean == "handled" || clean == "true") {
                    // Handled inside webview (closed modal, drawer, or navigated back to previous screen)
                } else if (wv.canGoBack()) {
                    wv.goBack()
                } else {
                    finishWithoutExitTransition()
                }
            }
        }

        AndroidView(
            modifier = Modifier.fillMaxSize(),
            factory = { context ->
                WebView(context).apply {
                    layoutParams = ViewGroup.LayoutParams(
                        ViewGroup.LayoutParams.MATCH_PARENT,
                        ViewGroup.LayoutParams.MATCH_PARENT
                    )
                    setBackgroundColor(android.graphics.Color.parseColor("#f8fafc"))
                    currentWebView = this
                    webViewInstance = this

                    settings.apply {
                        javaScriptEnabled = true
                        domStorageEnabled = true
                        databaseEnabled = true
                        allowFileAccess = true
                        allowContentAccess = true
                        allowFileAccessFromFileURLs = true
                        allowUniversalAccessFromFileURLs = true
                        loadWithOverviewMode = true
                        useWideViewPort = true
                        setSupportZoom(false)
                        displayZoomControls = false
                        builtInZoomControls = false
                        cacheMode = WebSettings.LOAD_DEFAULT
                        mediaPlaybackRequiresUserGesture = false
                        mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
                    }

                    // Setup official Android WebViewAssetLoader
                    val assetLoader = WebViewAssetLoader.Builder()
                        .setDomain("appassets.androidplatform.net")
                        .addPathHandler("/", WebViewAssetLoader.AssetsPathHandler(context))
                        .build()

                    // Prevent accidental text selection and marking on long press
                    setOnLongClickListener {
                        hitTestResult.type != WebView.HitTestResult.EDIT_TEXT_TYPE
                    }

                    val bridge = AndroidBridge(context, this@MainActivity)
                    androidBridge = bridge
                    addJavascriptInterface(bridge, "AndroidBridge")

                    webChromeClient = object : WebChromeClient() {
                        override fun onConsoleMessage(consoleMessage: ConsoleMessage?): Boolean {
                            Log.d("AlumCalcWeb", "${consoleMessage?.message()} [line: ${consoleMessage?.lineNumber()}]")
                            return true
                        }

                        override fun onJsAlert(view: WebView?, url: String?, message: String?, result: JsResult?): Boolean {
                            Toast.makeText(context, message ?: "", Toast.LENGTH_SHORT).show()
                            result?.confirm()
                            return true
                        }

                        override fun onJsConfirm(view: WebView?, url: String?, message: String?, result: JsResult?): Boolean {
                            result?.confirm()
                            return true
                        }

                        override fun onShowFileChooser(
                            webView: WebView?,
                            filePathCallback: ValueCallback<Array<Uri>>?,
                            fileChooserParams: FileChooserParams?
                        ): Boolean {
                            this@MainActivity.filePathCallback?.onReceiveValue(null)
                            this@MainActivity.filePathCallback = filePathCallback

                            val isCapture = fileChooserParams?.isCaptureEnabled == true
                            if (isCapture) {
                                if (ContextCompat.checkSelfPermission(this@MainActivity, Manifest.permission.CAMERA)
                                    == PackageManager.PERMISSION_GRANTED
                                ) {
                                    launchCameraCapture()
                                } else {
                                    requestCameraPermissionLauncher.launch(Manifest.permission.CAMERA)
                                }
                            } else {
                                val acceptTypes = fileChooserParams?.acceptTypes?.filter { it.isNotBlank() } ?: emptyList()
                                val isNonImage = acceptTypes.any { it.contains("json") || it.contains("text") || it.contains("pdf") }
                                val isPureImage = acceptTypes.isNotEmpty() && acceptTypes.all { it.startsWith("image/") }

                                if (isPureImage && !isNonImage) {
                                    filePickerLauncher.launch("image/*")
                                } else {
                                    try {
                                        val intent = Intent(Intent.ACTION_OPEN_DOCUMENT).apply {
                                            addCategory(Intent.CATEGORY_OPENABLE)
                                            type = "application/json"
                                            putExtra(Intent.EXTRA_MIME_TYPES, arrayOf("application/json", "text/plain"))
                                        }
                                        generalFilePickerLauncher.launch(intent)
                                    } catch (e: Exception) {
                                        try {
                                            val fallback = Intent(Intent.ACTION_GET_CONTENT).apply {
                                                addCategory(Intent.CATEGORY_OPENABLE)
                                                type = "application/json"
                                            }
                                            generalFilePickerLauncher.launch(fallback)
                                        } catch (_: Exception) {
                                            filePickerLauncher.launch("image/*")
                                        }
                                    }
                                }
                            }
                            return true
                        }
                    }

                    webViewClient = object : WebViewClient() {
                        override fun shouldInterceptRequest(
                            view: WebView?,
                            request: WebResourceRequest?
                        ): WebResourceResponse? {
                            val url = request?.url ?: return null

                            // First, try WebViewAssetLoader
                            val assetLoaderResponse = assetLoader.shouldInterceptRequest(url)
                            if (assetLoaderResponse != null) {
                                return assetLoaderResponse
                            }

                            // Robust manual fallback for any localhost / appassets requests
                            val host = url.host ?: ""
                            if (host == "appassets.androidplatform.net" || host == "localhost" || host == "127.0.0.1") {
                                val rawPath = url.path.orEmpty().removePrefix("/")
                                val path = if (rawPath.isEmpty()) "index.html" else rawPath

                                val candidatePaths = listOf(path, "public/$path", "assets/$path")
                                for (candidate in candidatePaths) {
                                    try {
                                        val inputStream = context.assets.open(candidate)
                                        val mimeType = when {
                                            candidate.endsWith(".html") -> "text/html"
                                            candidate.endsWith(".js") || candidate.endsWith(".mjs") -> "application/javascript"
                                            candidate.endsWith(".css") -> "text/css"
                                            candidate.endsWith(".png") -> "image/png"
                                            candidate.endsWith(".jpg") || candidate.endsWith(".jpeg") -> "image/jpeg"
                                            candidate.endsWith(".svg") -> "image/svg+xml"
                                            candidate.endsWith(".json") -> "application/json"
                                            candidate.endsWith(".map") -> "application/json"
                                            candidate.endsWith(".woff2") -> "font/woff2"
                                            candidate.endsWith(".woff") -> "font/woff"
                                            candidate.endsWith(".ttf") -> "font/ttf"
                                            else -> "application/octet-stream"
                                        }
                                        val headers = mapOf(
                                            "Access-Control-Allow-Origin" to "*",
                                            "Access-Control-Allow-Methods" to "GET, POST, OPTIONS",
                                            "Access-Control-Allow-Headers" to "*",
                                            "Cache-Control" to "no-cache"
                                        )
                                        return WebResourceResponse(mimeType, "UTF-8", 200, "OK", headers, inputStream)
                                    } catch (_: Exception) {}
                                }
                            }
                            return super.shouldInterceptRequest(view, request)
                        }

                        override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {
                            val uri = request?.url ?: return false
                            val scheme = uri.scheme?.lowercase() ?: ""
                            val host = uri.host?.lowercase() ?: ""
                            if (scheme == "tel" || scheme == "mailto" || scheme == "sms" || scheme == "whatsapp" || scheme == "tg" || host.contains("wa.me") || host.contains("t.me")) {
                                try {
                                    val intent = Intent(Intent.ACTION_VIEW, uri)
                                    intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                                    context.startActivity(intent)
                                    return true
                                } catch (e: Exception) {
                                    Log.e("AlumCalcWeb", "Error handling external url: $uri", e)
                                }
                            }
                            return false
                        }

                        override fun onReceivedSslError(view: WebView?, handler: SslErrorHandler?, error: SslError?) {
                            handler?.proceed()
                        }

                        override fun onReceivedError(view: WebView?, request: WebResourceRequest?, error: WebResourceError?) {
                            Log.e("AlumCalcWeb", "onReceivedError: ${request?.url} -> ${error?.description}")
                        }

                        override fun onPageFinished(view: WebView?, url: String?) {
                            super.onPageFinished(view, url)
                            view?.evaluateJavascript(
                                """
                                (function() {
                                    if (typeof navigator !== 'undefined') {
                                        navigator.vibrate = function(ms) {
                                            try {
                                                if (window.AndroidBridge && window.AndroidBridge.vibrate) {
                                                    var val = Array.isArray(ms) ? ms[0] : (ms || 15);
                                                    window.AndroidBridge.vibrate(val);
                                                    return true;
                                                }
                                            } catch(e) {}
                                            return false;
                                        };
                                    }
                                })();
                                """.trimIndent(),
                                null
                            )
                        }
                    }

                    // Handle downloads (e.g., Save Report Image)
                    setDownloadListener { url, _, _, mimeType, _ ->
                        handleDownload(context, url, mimeType)
                    }

                    // Load using Google-recommended secure appassets domain
                    loadUrl("https://appassets.androidplatform.net/index.html")
                }
            }
        )
    }

    private fun handleDownload(context: Context, url: String, mimeType: String) {
        try {
            if (url.startsWith("data:image/")) {
                val commaIndex = url.indexOf(",")
                if (commaIndex != -1) {
                    val base64Data = url.substring(commaIndex + 1)
                    val bytes = Base64.decode(base64Data, Base64.DEFAULT)
                    val fileName = "Thai_Report_${System.currentTimeMillis()}.png"

                    val resolver = context.contentResolver
                    val contentValues = ContentValues().apply {
                        put(MediaStore.MediaColumns.DISPLAY_NAME, fileName)
                        put(MediaStore.MediaColumns.MIME_TYPE, "image/png")
                        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                            put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_DOWNLOADS + "/AluCraft")
                            put(MediaStore.MediaColumns.IS_PENDING, 1)
                        }
                    }

                    val imageUri = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                        resolver.insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, contentValues)
                    } else {
                        val directory = File(context.getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS), "AluCraft")
                        if (!directory.exists() && !directory.mkdirs()) throw IllegalStateException("Could not create download folder")
                        val outputFile = File(directory, fileName)
                        outputFile.outputStream().use { it.write(bytes) }
                        FileProvider.getUriForFile(context, "${context.packageName}.fileprovider", outputFile)
                    }
                    if (imageUri != null) {
                        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                            val outputStream: OutputStream? = resolver.openOutputStream(imageUri, "w")
                            outputStream?.use { it.write(bytes) }
                                ?: throw IllegalStateException("Could not open report image")

                            contentValues.clear()
                            contentValues.put(MediaStore.MediaColumns.IS_PENDING, 0)
                            resolver.update(imageUri, contentValues, null, null)
                        }

                        Toast.makeText(context, "Report image saved to Pictures!", Toast.LENGTH_LONG).show()

                        val shareIntent = Intent(Intent.ACTION_SEND).apply {
                            type = "image/png"
                            putExtra(Intent.EXTRA_STREAM, imageUri)
                            addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
                        }
                        context.startActivity(Intent.createChooser(shareIntent, "Share Fabrication Report"))
                    }
                }
            }
        } catch (e: Exception) {
            Log.e("AlumCalcWeb", "Error saving download", e)
            Toast.makeText(context, "Saved report: ${e.message}", Toast.LENGTH_SHORT).show()
        }
    }

    class AndroidBridge(private val context: Context, private val activity: MainActivity) {
        private val httpClient = OkHttpClient.Builder()
            .connectTimeout(30, TimeUnit.SECONDS)
            .readTimeout(60, TimeUnit.SECONDS)
            .writeTimeout(60, TimeUnit.SECONDS)
            .build()

        @JavascriptInterface
        fun vibrate(durationMs: Long) {
            try {
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                    val vm = context.getSystemService(Context.VIBRATOR_MANAGER_SERVICE) as? VibratorManager
                    vm?.defaultVibrator?.vibrate(VibrationEffect.createOneShot(durationMs.coerceAtLeast(10), VibrationEffect.DEFAULT_AMPLITUDE))
                } else {
                    @Suppress("DEPRECATION")
                    val v = context.getSystemService(Context.VIBRATOR_SERVICE) as? Vibrator
                    @Suppress("DEPRECATION")
                    v?.vibrate(durationMs.coerceAtLeast(10))
                }
            } catch (_: Exception) {}
        }

        @JavascriptInterface
        fun showToast(message: String) {
            activity.runOnUiThread {
                Toast.makeText(context, message, Toast.LENGTH_SHORT).show()
            }
        }

        @JavascriptInterface
        fun saveImage(base64Data: String, fileName: String): Boolean {
            return saveImageInternal(base64Data, fileName, showSuccessToast = true)
        }

        @JavascriptInterface
        fun saveImageQuiet(base64Data: String, fileName: String): Boolean {
            return saveImageInternal(base64Data, fileName, showSuccessToast = false)
        }

        @JavascriptInterface
        fun saveInvoiceImages(pagesJson: String, fileName: String, shopName: String): Boolean {
            return try {
                val pages = JSONArray(pagesJson)
                if (pages.length() == 0) return false
                val baseName = invoiceSafeBaseName(fileName)
                val invoiceFolder = invoiceFolderName(shopName)
                for (index in 0 until pages.length()) {
                    val bytes = decodeInvoiceImage(pages.getString(index))
                    saveInvoiceDownload(bytes, "$baseName.jpg", "image/jpeg", invoiceFolder)
                        ?: throw IllegalStateException("Could not create invoice image")
                }
                showInvoiceToast("Invoice Image Saved To Download Folder")
                true
            } catch (e: Exception) {
                Log.e("AlumCalcWeb", "Could not save invoice images", e)
                false
            }
        }

        @JavascriptInterface
        fun saveInvoicePdf(pagesJson: String, fileName: String, shopName: String): Boolean {
            return try {
                val bytes = createInvoicePdf(pagesJson)
                val safeName = invoiceSafeBaseName(fileName).let {
                    if (it.endsWith(".pdf", ignoreCase = true)) it else "$it.pdf"
                }
                saveInvoiceDownload(bytes, safeName, "application/pdf", invoiceFolderName(shopName))
                    ?: throw IllegalStateException("Could not create invoice PDF")
                showInvoiceToast("Invoice PDF Saved To Download Folder")
                true
            } catch (e: Exception) {
                Log.e("AlumCalcWeb", "Could not save invoice PDF", e)
                false
            }
        }

        @JavascriptInterface
        fun shareInvoiceImages(pagesJson: String, fileName: String, shopName: String): Boolean {
            return try {
                val pages = JSONArray(pagesJson)
                if (pages.length() == 0) return false
                val baseName = invoiceSafeBaseName(fileName)
                val invoiceFolder = invoiceFolderName(shopName)
                val uris = ArrayList<Uri>(pages.length())
                for (index in 0 until pages.length()) {
                    val bytes = decodeInvoiceImage(pages.getString(index))
                    uris.add(saveInvoiceDownload(bytes, "$baseName.jpg", "image/jpeg", invoiceFolder)
                        ?: throw IllegalStateException("Could not prepare invoice image"))
                }
                launchInvoiceShare(uris, "image/jpeg", baseName)
                true
            } catch (e: Exception) {
                Log.e("AlumCalcWeb", "Could not share invoice images", e)
                false
            }
        }

        @JavascriptInterface
        fun shareInvoicePdf(pagesJson: String, fileName: String, shopName: String): Boolean {
            return try {
                val baseName = invoiceSafeBaseName(fileName)
                val safeName = if (baseName.endsWith(".pdf", ignoreCase = true)) baseName else "$baseName.pdf"
                val uri = saveInvoiceDownload(createInvoicePdf(pagesJson), safeName, "application/pdf", invoiceFolderName(shopName))
                    ?: throw IllegalStateException("Could not prepare invoice PDF")
                launchInvoiceShare(arrayListOf(uri), "application/pdf", safeName)
                true
            } catch (e: Exception) {
                Log.e("AlumCalcWeb", "Could not share invoice PDF", e)
                false
            }
        }

        @JavascriptInterface
        fun saveBillingPdf(imageDataUrl: String, fileName: String): Boolean {
            return try {
                val baseName = invoiceSafeBaseName(fileName)
                val safeName = if (baseName.endsWith(".pdf", ignoreCase = true)) baseName else "$baseName.pdf"
                saveInvoiceDownload(createBillingPdf(imageDataUrl), safeName, "application/pdf")
                    ?: throw IllegalStateException("Could not create billing PDF")
                showInvoiceToast("Billing PDF saved to Downloads/Kolma Thai Invoices")
                true
            } catch (e: Exception) {
                Log.e("AlumCalcWeb", "Could not save billing PDF", e)
                false
            }
        }

        @JavascriptInterface
        fun shareBillingImage(imageDataUrl: String, fileName: String): Boolean {
            return try {
                val baseName = invoiceSafeBaseName(fileName)
                val safeName = if (baseName.endsWith(".png", ignoreCase = true)) baseName else "$baseName.png"
                val uri = saveInvoiceDownload(decodeInvoiceImage(imageDataUrl), safeName, "image/png")
                    ?: throw IllegalStateException("Could not prepare billing image")
                launchInvoiceShare(arrayListOf(uri), "image/png", baseName)
                true
            } catch (e: Exception) {
                Log.e("AlumCalcWeb", "Could not share billing image", e)
                false
            }
        }

        @JavascriptInterface
        fun shareBillingPdf(imageDataUrl: String, fileName: String): Boolean {
            return try {
                val baseName = invoiceSafeBaseName(fileName)
                val safeName = if (baseName.endsWith(".pdf", ignoreCase = true)) baseName else "$baseName.pdf"
                val uri = saveInvoiceDownload(createBillingPdf(imageDataUrl), safeName, "application/pdf")
                    ?: throw IllegalStateException("Could not prepare billing PDF")
                launchInvoiceShare(arrayListOf(uri), "application/pdf", baseName)
                true
            } catch (e: Exception) {
                Log.e("AlumCalcWeb", "Could not share billing PDF", e)
                false
            }
        }

        private fun invoiceSafeBaseName(fileName: String): String {
            return fileName.substringBeforeLast('.', fileName)
                .filter { it.code >= 0x20 && it.code != 0x7f }
                .replace('/', ' ')
                .replace('\\', ' ')
                .replace(':', ' ')
                .replace('*', ' ')
                .replace('?', ' ')
                .replace('"', ' ')
                .replace('<', ' ')
                .replace('>', ' ')
                .replace('|', ' ')
                .replace(Regex("\\s+"), " ")
                .trim()
                .trimEnd('.')
                .ifBlank { "Customer" }
        }

        private fun invoiceFolderName(shopName: String): String {
            val safeShopName = shopName
                .filter { it.code >= 0x20 && it.code != 0x7f }
                .replace(Regex("[\\\\/:*?\"<>|]"), " ")
                .replace(Regex("\\s+"), " ")
                .trim()
                .trimEnd('.')
                .ifBlank { "Shop" }
            return "$safeShopName Invoice"
        }
        private fun decodeInvoiceImage(dataUrl: String): ByteArray {
            val encoded = dataUrl.substringAfter(',', dataUrl)
            return Base64.decode(encoded, Base64.DEFAULT)
        }

        private fun createInvoicePdf(pagesJson: String): ByteArray {
            val pages = JSONArray(pagesJson)
            require(pages.length() > 0) { "Invoice has no pages" }
            val document = PdfDocument()
            try {
                for (index in 0 until pages.length()) {
                    val bitmapBytes = decodeInvoiceImage(pages.getString(index))
                    val bitmap = BitmapFactory.decodeByteArray(bitmapBytes, 0, bitmapBytes.size)
                        ?: throw IllegalArgumentException("Invoice page image is invalid")
                    try {
                        val pageInfo = PdfDocument.PageInfo.Builder(595, 842, index + 1).create()
                        val page = document.startPage(pageInfo)
                        page.canvas.drawBitmap(bitmap, null, RectF(0f, 0f, 595f, 842f), null)
                        document.finishPage(page)
                    } finally {
                        bitmap.recycle()
                    }
                }
                val output = java.io.ByteArrayOutputStream()
                document.writeTo(output)
                return output.toByteArray()
            } finally {
                document.close()
            }
        }

        private fun createBillingPdf(imageDataUrl: String): ByteArray {
            val bitmapBytes = decodeInvoiceImage(imageDataUrl)
            val bitmap = BitmapFactory.decodeByteArray(bitmapBytes, 0, bitmapBytes.size)
                ?: throw IllegalArgumentException("Billing image is invalid")
            val document = PdfDocument()
            try {
                val pageWidth = 595
                val pageHeight = 842
                val page = document.startPage(PdfDocument.PageInfo.Builder(pageWidth, pageHeight, 1).create())
                val scale = minOf(pageWidth.toFloat() / bitmap.width.toFloat(), pageHeight.toFloat() / bitmap.height.toFloat())
                val imageWidth = bitmap.width * scale
                val imageHeight = bitmap.height * scale
                val left = (pageWidth.toFloat() - imageWidth) / 2f
                val top = (pageHeight.toFloat() - imageHeight) / 2f
                page.canvas.drawBitmap(bitmap, null, RectF(left, top, left + imageWidth, top + imageHeight), null)
                document.finishPage(page)
                val output = java.io.ByteArrayOutputStream()
                document.writeTo(output)
                return output.toByteArray()
            } finally {
                document.close()
                bitmap.recycle()
            }
        }

        private fun saveInvoiceDownload(
            bytes: ByteArray,
            fileName: String,
            mimeType: String,
            invoiceFolder: String? = null
        ): Uri? {
            val relativeFolder = buildString {
                append("AluCraft")
                if (!invoiceFolder.isNullOrBlank()) append("/").append(invoiceFolder)
            }
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                val values = ContentValues().apply {
                    put(MediaStore.MediaColumns.DISPLAY_NAME, fileName)
                    put(MediaStore.MediaColumns.MIME_TYPE, mimeType)
                    put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_DOWNLOADS + "/" + relativeFolder)
                    put(MediaStore.MediaColumns.IS_PENDING, 1)
                }
                val resolver = context.contentResolver
                val uri = resolver.insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, values) ?: return null
                try {
                    resolver.openOutputStream(uri, "w")?.use { it.write(bytes) }
                        ?: throw IllegalStateException("Could not open invoice file")
                    val ready = ContentValues().apply { put(MediaStore.MediaColumns.IS_PENDING, 0) }
                    resolver.update(uri, ready, null, null)
                    return uri
                } catch (e: Exception) {
                    resolver.delete(uri, null, null)
                    throw e
                }
            }

            val directory = File(context.getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS), relativeFolder)
            if (!directory.exists() && !directory.mkdirs()) return null
            val outputFile = File(directory, fileName)
            outputFile.outputStream().use { it.write(bytes) }
            return FileProvider.getUriForFile(context, "${context.packageName}.fileprovider", outputFile)
        }

        private fun launchInvoiceShare(uris: ArrayList<Uri>, mimeType: String, title: String) {
            activity.runOnUiThread {
                try {
                    val multiple = uris.size > 1
                    val shareIntent = Intent(if (multiple) Intent.ACTION_SEND_MULTIPLE else Intent.ACTION_SEND).apply {
                        type = mimeType
                        if (multiple) putParcelableArrayListExtra(Intent.EXTRA_STREAM, uris)
                        else putExtra(Intent.EXTRA_STREAM, uris.first())
                        addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
                        clipData = ClipData.newUri(context.contentResolver, "Invoice", uris.first()).apply {
                            uris.drop(1).forEach { addItem(ClipData.Item(it)) }
                        }
                    }
                    activity.startActivity(Intent.createChooser(shareIntent, "Share $title"))
                } catch (e: Exception) {
                    Log.e("AlumCalcWeb", "Could not open invoice share sheet", e)
                    Toast.makeText(context, "Could not share invoice", Toast.LENGTH_SHORT).show()
                }
            }
        }

        private fun showInvoiceToast(message: String) {
            activity.runOnUiThread {
                Toast.makeText(context, message, Toast.LENGTH_LONG).show()
            }
        }

        private fun saveImageInternal(
            base64Data: String,
            fileName: String,
            showSuccessToast: Boolean
        ): Boolean {
            return try {
                val cleanData = if (base64Data.contains(",")) base64Data.substringAfter(",") else base64Data
                val bytes = Base64.decode(cleanData, Base64.DEFAULT)
                val safeFileName = if (fileName.endsWith(".png") || fileName.endsWith(".jpg")) fileName else "$fileName.png"
                val resolver = context.contentResolver
                val contentValues = ContentValues().apply {
                    put(MediaStore.MediaColumns.DISPLAY_NAME, safeFileName)
                    val isJpeg = safeFileName.endsWith(".jpg", ignoreCase = true) || safeFileName.endsWith(".jpeg", ignoreCase = true)
                    put(MediaStore.MediaColumns.MIME_TYPE, if (isJpeg) "image/jpeg" else "image/png")
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                        put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_DOWNLOADS + "/AluCraft")
                        put(MediaStore.MediaColumns.IS_PENDING, 1)
                    }
                }
                val imageUri = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                    resolver.insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, contentValues)
                } else {
                    val directory = File(context.getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS), "AluCraft")
                    if (!directory.exists() && !directory.mkdirs()) return false
                    val outputFile = File(directory, safeFileName)
                    outputFile.outputStream().use { it.write(bytes) }
                    FileProvider.getUriForFile(context, "${context.packageName}.fileprovider", outputFile)
                }
                if (imageUri != null) {
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                        val outputStream = resolver.openOutputStream(imageUri, "w")
                        outputStream?.use { it.write(bytes) }
                            ?: throw IllegalStateException("Could not open report image")
                        contentValues.clear()
                        contentValues.put(MediaStore.MediaColumns.IS_PENDING, 0)
                        resolver.update(imageUri, contentValues, null, null)
                    }
                    if (showSuccessToast) {
                        activity.runOnUiThread {
                            Toast.makeText(context, "Saved $safeFileName to Pictures!", Toast.LENGTH_SHORT).show()
                        }
                    }
                    true
                } else false
            } catch (e: Exception) {
                Log.e("MainActivity", "Error saving image via bridge", e)
                false
            }
        }

        @JavascriptInterface
        fun openUrl(url: String) {
            activity.runOnUiThread {
                try {
                    val intent = Intent(Intent.ACTION_VIEW, Uri.parse(url))
                    intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                    context.startActivity(intent)
                } catch (e: Exception) {
                    Log.e("MainActivity", "Error opening external url: $url", e)
                    Toast.makeText(context, "Could not open link: ${e.message}", Toast.LENGTH_SHORT).show()
                }
            }
        }

        @JavascriptInterface
        fun chooseGoogleAccount() {
            activity.runOnUiThread {
                try {
                    val intent = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                        AccountManager.newChooseAccountIntent(
                            null,
                            null,
                            arrayOf("com.google"),
                            null,
                            null,
                            null,
                            null
                        )
                    } else {
                        @Suppress("DEPRECATION")
                        AccountManager.newChooseAccountIntent(
                            null,
                            null,
                            arrayOf("com.google"),
                            false,
                            null,
                            null,
                            null,
                            null
                        )
                    }
                    activity.accountPickerLauncher.launch(intent)
                } catch (e: Exception) {
                    Log.e("MainActivity", "Failed to launch account picker", e)
                    val safeErr = JSONObject.quote(e.message ?: "Account picker unavailable")
                    activity.webViewInstance?.evaluateJavascript(
                        "if (typeof window.onGoogleAccountPickerError === 'function') { window.onGoogleAccountPickerError($safeErr); }",
                        null
                    )
                }
            }
        }

        @JavascriptInterface
        fun pickBackupFile() {
            activity.runOnUiThread {
                try {
                    val intent = Intent(Intent.ACTION_OPEN_DOCUMENT).apply {
                        addCategory(Intent.CATEGORY_OPENABLE)
                        type = "application/json"
                        putExtra(Intent.EXTRA_MIME_TYPES, arrayOf("application/json", "text/plain"))
                    }
                    activity.restoreFilePickerLauncher.launch(intent)
                } catch (e: Exception) {
                    Log.e("MainActivity", "Failed to launch OpenDocument, trying GET_CONTENT", e)
                    try {
                        val fallback = Intent(Intent.ACTION_GET_CONTENT).apply {
                            addCategory(Intent.CATEGORY_OPENABLE)
                            type = "application/json"
                        }
                        activity.restoreFilePickerLauncher.launch(fallback)
                    } catch (err: Exception) {
                        Toast.makeText(context, "Could not open file manager: ${err.message}", Toast.LENGTH_SHORT).show()
                    }
                }
            }
        }

        private val backupFileName = "thai_fabricator_appdata_backup.json"

        private fun driveHttpError(response: okhttp3.Response): DriveResponse<Nothing> {
            val bodyText = response.body?.string().orEmpty()
            val detail = try {
                JSONObject(bodyText).optJSONObject("error")?.optString("message").orEmpty()
            } catch (_: Exception) { "" }
            val message = if (detail.isNotBlank()) detail.take(240) else response.message.ifBlank { "Request failed" }
            return DriveResponse(error = "Google Drive HTTP ${response.code}: $message", httpCode = response.code)
        }

        private fun queryDriveAppDataFiles(token: String): DriveResponse<List<JSONObject>> {
            val fileList = mutableListOf<JSONObject>()
            var pageToken: String? = null
            do {
                val url = okhttp3.HttpUrl.Builder()
                    .scheme("https")
                    .host("www.googleapis.com")
                    .addPathSegments("drive/v3/files")
                    .addQueryParameter("spaces", "appDataFolder")
                    .addQueryParameter("q", "'appDataFolder' in parents and trashed=false")
                    .addQueryParameter("fields", "nextPageToken,files(id,name,mimeType,modifiedTime,size)")
                    .addQueryParameter("orderBy", "modifiedTime desc")
                    .addQueryParameter("pageSize", "100")
                    .apply { pageToken?.let { addQueryParameter("pageToken", it) } }
                    .build()
                val request = Request.Builder()
                    .url(url)
                    .header("Authorization", "Bearer $token")
                    .header("Accept", "application/json")
                    .get()
                    .build()
                try {
                    httpClient.newCall(request).execute().use { response ->
                        if (!response.isSuccessful) return driveHttpError(response)
                        val json = JSONObject(response.body?.string().orEmpty())
                        val files = json.optJSONArray("files") ?: JSONArray()
                        for (index in 0 until files.length()) {
                            files.optJSONObject(index)?.let(fileList::add)
                        }
                        pageToken = json.optString("nextPageToken").ifBlank { null }
                    }
                } catch (e: Exception) {
                    Log.e("GoogleDrive", "Drive file listing failed", e)
                    return DriveResponse(error = activity.driveErrorMessage(e))
                }
            } while (!pageToken.isNullOrEmpty())
            return DriveResponse(value = fileList)
        }

        internal fun uploadBackupToDrive(token: String, backupJson: String): DriveResponse<String> {
            val listed = queryDriveAppDataFiles(token)
            if (!listed.isSuccess) {
                return DriveResponse(error = listed.error, httpCode = listed.httpCode)
            }
            val existingFile = listed.value.orEmpty().firstOrNull { it.optString("name") == backupFileName }
            val uploadedId = if (existingFile != null) {
                val fileId = existingFile.optString("id")
                if (fileId.isBlank()) return DriveResponse(error = "The existing Drive backup has no file ID.")
                val url = okhttp3.HttpUrl.Builder()
                    .scheme("https")
                    .host("www.googleapis.com")
                    .addPathSegments("upload/drive/v3/files/$fileId")
                    .addQueryParameter("uploadType", "media")
                    .addQueryParameter("fields", "id,name,mimeType,size")
                    .build()
                val request = Request.Builder()
                    .url(url)
                    .header("Authorization", "Bearer $token")
                    .patch(backupJson.toRequestBody("application/json; charset=UTF-8".toMediaType()))
                    .build()
                try {
                    httpClient.newCall(request).execute().use { response ->
                        if (!response.isSuccessful) return driveHttpError(response)
                        val body = response.body?.string().orEmpty()
                        val returnedId = try { JSONObject(body).optString("id") } catch (_: Exception) { "" }
                        returnedId.ifBlank { fileId }
                    }
                } catch (e: Exception) {
                    Log.e("GoogleDrive", "Drive backup update failed", e)
                    return DriveResponse(error = activity.driveErrorMessage(e))
                }
            } else {
                val metadata = JSONObject().apply {
                    put("name", backupFileName)
                    put("mimeType", "application/json")
                    put("parents", JSONArray().put("appDataFolder"))
                }
                val body = okhttp3.MultipartBody.Builder()
                    .setType("multipart/related".toMediaType())
                    .addPart(metadata.toString().toRequestBody("application/json; charset=UTF-8".toMediaType()))
                    .addPart(backupJson.toRequestBody("application/json; charset=UTF-8".toMediaType()))
                    .build()
                val url = okhttp3.HttpUrl.Builder()
                    .scheme("https")
                    .host("www.googleapis.com")
                    .addPathSegments("upload/drive/v3/files")
                    .addQueryParameter("uploadType", "multipart")
                    .addQueryParameter("fields", "id,name,mimeType,size")
                    .build()
                val request = Request.Builder()
                    .url(url)
                    .header("Authorization", "Bearer $token")
                    .post(body)
                    .build()
                try {
                    httpClient.newCall(request).execute().use { response ->
                        if (!response.isSuccessful) return driveHttpError(response)
                        val bodyText = response.body?.string().orEmpty()
                        val result = try { JSONObject(bodyText) } catch (_: Exception) { null }
                        val id = result?.optString("id").orEmpty()
                        if (id.isBlank() || result?.optString("name") != backupFileName) {
                            return DriveResponse(error = "Google Drive accepted the upload but returned invalid file metadata.")
                        }
                        id
                    }
                } catch (e: Exception) {
                    Log.e("GoogleDrive", "Drive backup upload failed", e)
                    return DriveResponse(error = activity.driveErrorMessage(e))
                }
            }

            val verification = verifyUploadedBackup(token, uploadedId, backupJson)
            return if (verification.isSuccess) DriveResponse(value = uploadedId)
            else DriveResponse(error = verification.error, httpCode = verification.httpCode)
        }

        private fun verifyUploadedBackup(token: String, fileId: String, expectedJson: String): DriveResponse<Boolean> {
            val url = okhttp3.HttpUrl.Builder()
                .scheme("https")
                .host("www.googleapis.com")
                .addPathSegments("drive/v3/files/$fileId")
                .addQueryParameter("alt", "media")
                .build()
            val request = Request.Builder()
                .url(url)
                .header("Authorization", "Bearer $token")
                .get()
                .build()
            return try {
                httpClient.newCall(request).execute().use { response ->
                    if (!response.isSuccessful) return driveHttpError(response)
                    val downloaded = response.body?.string().orEmpty()
                    if (downloaded == expectedJson) DriveResponse(value = true)
                    else DriveResponse(error = "The uploaded Drive backup did not match the data sent.")
                }
            } catch (e: Exception) {
                Log.e("GoogleDrive", "Could not verify uploaded Drive backup", e)
                DriveResponse(error = activity.driveErrorMessage(e))
            }
        }

        internal fun downloadBackupFromDrive(token: String): DriveResponse<String> {
            val listed = queryDriveAppDataFiles(token)
            if (!listed.isSuccess) return DriveResponse(error = listed.error, httpCode = listed.httpCode)
            val files = listed.value.orEmpty()
            val target = files.firstOrNull { it.optString("name") == backupFileName }
                ?: files.firstOrNull {
                    val name = it.optString("name")
                    name.startsWith("Thai_Fabrication_FullBackup_") || name.startsWith("Thai_Fabrication_Backup_")
                }
                ?: return DriveResponse(error = "No app backup was found in this Google account's Drive app data.")
            val fileId = target.optString("id")
            if (fileId.isBlank()) return DriveResponse(error = "The Drive backup entry has no file ID.")
            val url = okhttp3.HttpUrl.Builder()
                .scheme("https")
                .host("www.googleapis.com")
                .addPathSegments("drive/v3/files/$fileId")
                .addQueryParameter("alt", "media")
                .build()
            val request = Request.Builder()
                .url(url)
                .header("Authorization", "Bearer $token")
                .header("Accept", "application/json")
                .get()
                .build()
            return try {
                httpClient.newCall(request).execute().use { response ->
                    if (!response.isSuccessful) return driveHttpError(response)
                    val downloaded = response.body?.string().orEmpty()
                    if (activity.isValidBackupJson(downloaded)) DriveResponse(value = downloaded)
                    else DriveResponse(error = "The Drive backup file is empty, invalid, or unsupported.")
                }
            } catch (e: Exception) {
                Log.e("GoogleDrive", "Drive backup download failed", e)
                DriveResponse(error = activity.driveErrorMessage(e))
            }
        }

        fun cacheRemoteBackup(backupJson: String, accountEmail: String) {
            context.getSharedPreferences("thai_backup_prefs", Context.MODE_PRIVATE)
                .edit()
                .putString("cloud_backup", backupJson)
                .putString("selected_account", accountEmail)
                .commit()
            try {
                File(context.filesDir, "google_drive_hidden_appdata_backup.json").writeText(backupJson)
            } catch (e: Exception) {
                Log.w("GoogleDrive", "Could not cache verified Drive backup", e)
            }
        }

        @JavascriptInterface
        fun requestDriveBackup(backupJson: String, accountEmail: String, operationId: String): Boolean {
            if (!activity.isValidBackupJson(backupJson)) return false
            activity.requestDriveBackup(backupJson, accountEmail, operationId)
            return true
        }

        @JavascriptInterface
        fun requestDriveRestore(accountEmail: String, operationId: String): Boolean {
            activity.requestDriveRestore(accountEmail, operationId)
            return true
        }

        @JavascriptInterface
        fun cacheRestoredDriveBackup(backupJson: String, accountEmail: String): Boolean {
            if (!activity.isValidBackupJson(backupJson)) return false
            cacheRemoteBackup(backupJson, accountEmail)
            return true
        }

        @JavascriptInterface
        fun revokeDriveAccess(accountEmail: String) {
            activity.runOnUiThread { activity.revokeDriveAuthorization(accountEmail) }
        }

        @JavascriptInterface
        fun saveAppDataBatch(entriesJson: String): Boolean {
            return try {
                val entries = JSONObject(entriesJson)
                val editor = context.getSharedPreferences("thai_app_storage", Context.MODE_PRIVATE).edit()
                val keys = entries.keys()
                while (keys.hasNext()) {
                    val key = keys.next()
                    if (key.startsWith("thai_backup_") || key == "thai_cloud_backup_snapshot") return false
                    val value = entries.opt(key)
                    if (value == null || value === JSONObject.NULL) continue
                    editor.putString(key, if (value is String) value else value.toString())
                }
                editor.commit()
            } catch (e: Exception) {
                Log.e("MainActivity", "Could not persist restored app data", e)
                false
            }
        }

        @JavascriptInterface
        fun replaceAppDataBatch(entriesJson: String): Boolean {
            return try {
                val entries = JSONObject(entriesJson)
                val editor = context.getSharedPreferences("thai_app_storage", Context.MODE_PRIVATE).edit().clear()
                val keys = entries.keys()
                while (keys.hasNext()) {
                    val key = keys.next()
                    if (key.startsWith("thai_backup_") || key == "thai_cloud_backup_snapshot") return false
                    val value = entries.opt(key)
                    if (value == null || value === JSONObject.NULL) continue
                    editor.putString(key, if (value is String) value else value.toString())
                }
                editor.commit()
            } catch (e: Exception) {
                Log.e("MainActivity", "Could not replace app data with the verified cloud backup", e)
                false
            }
        }

        @JavascriptInterface
        fun saveAppData(key: String, value: String): Boolean {
            return try {
                context.getSharedPreferences("thai_app_storage", Context.MODE_PRIVATE)
                    .edit()
                    .putString(key, value)
                    .commit()
                true
            } catch (e: Exception) {
                Log.e("MainActivity", "Failed to save app data for $key", e)
                false
            }
        }

        @JavascriptInterface
        fun getAppData(key: String): String {
            return try {
                val sp = context.getSharedPreferences("thai_app_storage", Context.MODE_PRIVATE)
                val direct = sp.getString(key, "") ?: ""
                if (sp.contains(key)) {
                    return direct
                }
                // Read only the last verified remote backup cache; never start OAuth or a
                // network request from the synchronous WebView bridge.
                val bkp = readCachedAppDataBackup()
                if (bkp.isNotEmpty()) {
                    val obj = JSONObject(bkp)
                    if (key == "thai_customers_db" && obj.has("customers")) {
                        val arr = obj.getJSONArray("customers").toString()
                        if (arr != "[]") return arr
                    } else if (key == "thai_history" && obj.has("history")) {
                        val arr = obj.getJSONArray("history").toString()
                        if (arr != "[]") return arr
                    } else if (key == "thai_active_calculator" && obj.has("calculator")) {
                        return obj.getJSONObject("calculator").toString()
                    } else if (key == "google_base8_tape" && obj.has("base8Tape")) {
                        val arr = obj.getJSONArray("base8Tape").toString()
                        if (arr != "[]") return arr
                    } else if (obj.has("storageDump")) {
                        val dump = obj.getJSONObject("storageDump")
                        if (dump.has(key)) return dump.optString(key, "")
                    }
                }
                direct
            } catch (e: Exception) {
                Log.e("MainActivity", "Failed to get app data for $key", e)
                ""
            }
        }

        @JavascriptInterface
        fun getStoredAppData(key: String): String {
            return try {
                context.getSharedPreferences("thai_app_storage", Context.MODE_PRIVATE)
                    .getString(key, "") ?: ""
            } catch (e: Exception) {
                Log.e("MainActivity", "Failed to read stored app data for $key", e)
                ""
            }
        }

        private fun readCachedAppDataBackup(): String {
            return try {
                val cached = context.getSharedPreferences("thai_backup_prefs", Context.MODE_PRIVATE)
                    .getString("cloud_backup", null)
                if (!cached.isNullOrBlank()) cached
                else {
                    val file = File(context.filesDir, "google_drive_hidden_appdata_backup.json")
                    if (file.exists() && file.length() > 5) file.readText() else ""
                }
            } catch (_: Exception) {
                ""
            }
        }

        @JavascriptInterface
        fun saveLocalBackupFile(fileName: String, jsonContent: String): Boolean {
            return try {
                val safeFileName = if (fileName.endsWith(".json")) fileName else "$fileName.json"
                val bytes = jsonContent.toByteArray(Charsets.UTF_8)

                // 1. Mirror directly into persistent native storage
                context.getSharedPreferences("thai_backup_prefs", Context.MODE_PRIVATE)
                    .edit()
                    .putString("cloud_backup", jsonContent)
                    .commit()

                // Mirror customers, history, calculator, and base8Tape to thai_app_storage
                try {
                    val obj = JSONObject(jsonContent)
                    val appStorage = context.getSharedPreferences("thai_app_storage", Context.MODE_PRIVATE).edit()
                    if (obj.has("customers")) {
                        val cArr = obj.getJSONArray("customers")
                        if (cArr.length() > 0) appStorage.putString("thai_customers_db", cArr.toString())
                    }
                    if (obj.has("history")) {
                        val hArr = obj.getJSONArray("history")
                        if (hArr.length() > 0) appStorage.putString("thai_history", hArr.toString())
                    }
                    if (obj.has("calculator")) {
                        val calc = obj.getJSONObject("calculator")
                        appStorage.putString("thai_active_calculator", calc.toString())
                    }
                    if (obj.has("base8Tape")) {
                        val bArr = obj.getJSONArray("base8Tape")
                        if (bArr.length() > 0) appStorage.putString("google_base8_tape", bArr.toString())
                    }
                    if (obj.has("storageDump")) {
                        val dump = obj.getJSONObject("storageDump")
                        val keys = dump.keys()
                        while (keys.hasNext()) {
                            val k = keys.next()
                            appStorage.putString(k, dump.optString(k, ""))
                        }
                    }
                    appStorage.commit()
                } catch (_: Exception) {}

                // 2. Also save to internal files & external files directory
                try {
                    File(context.filesDir, safeFileName).writeBytes(bytes)
                    val extDir = context.getExternalFilesDir(null)
                    if (extDir != null) {
                        File(extDir, safeFileName).writeBytes(bytes)
                    }
                } catch (_: Exception) {}

                // 3. Save to MediaStore Downloads folder root so user easily sees it
                val resolver = context.contentResolver
                val contentValues = ContentValues().apply {
                    put(MediaStore.MediaColumns.DISPLAY_NAME, safeFileName)
                    put(MediaStore.MediaColumns.MIME_TYPE, "application/json")
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                        put(MediaStore.MediaColumns.RELATIVE_PATH, Environment.DIRECTORY_DOWNLOADS + "/AluCraft")
                        put(MediaStore.MediaColumns.IS_PENDING, 1)
                    }
                }
                val fileUri = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                    resolver.insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, contentValues)
                } else {
                    resolver.insert(MediaStore.Files.getContentUri("external"), contentValues)
                }

                if (fileUri != null) {
                    resolver.openOutputStream(fileUri, "wt")?.use { stream ->
                        stream.write(bytes)
                        stream.flush()
                    }
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                        contentValues.clear()
                        contentValues.put(MediaStore.MediaColumns.IS_PENDING, 0)
                        resolver.update(fileUri, contentValues, null, null)
                    }
                } else {
                    try {
                        val downloadDirectory = File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS), "AluCraft")
                        if (!downloadDirectory.exists()) downloadDirectory.mkdirs()
                        val targetFile = File(downloadDirectory, safeFileName)
                        targetFile.writeBytes(bytes)
                    } catch (_: Exception) {}
                }

                activity.runOnUiThread {
                    Toast.makeText(context, "Backup Complete In Download Folder.", Toast.LENGTH_SHORT).show()
                }
                true
            } catch (e: Exception) {
                Log.e("MainActivity", "Failed to save local backup file", e)
                false
            }
        }

        @JavascriptInterface
        fun restartApp() {
            activity.runOnUiThread {
                try {
                    CookieManager.getInstance().flush()
                    // Reload the WebView safely without killing the process
                    activity.webViewInstance?.loadUrl("https://appassets.androidplatform.net/index.html")
                } catch (e: Exception) {
                    Log.e("MainActivity", "Failed to restart app", e)
                    activity.recreate()
                }
            }
        }

        @JavascriptInterface
        fun getGeminiApiKey(): String {
            val key = try {
                BuildConfig.GEMINI_API_KEY
            } catch (_: Exception) {
                ""
            }
            if (key.isNotEmpty() && key != "MY_GEMINI_API_KEY") {
                return key
            }
            return System.getenv("GEMINI_API_KEY") ?: ""
        }

        @JavascriptInterface
        fun scanImageViaBridge(imageBase64: String, callbackJsName: String) {
            CoroutineScope(Dispatchers.IO).launch {
                try {
                    // Extract mimeType and raw base64 data
                    val commaIdx = imageBase64.indexOf(",")
                    val base64Data = if (commaIdx != -1) imageBase64.substring(commaIdx + 1) else imageBase64
                    val mimeType = if (imageBase64.startsWith("data:") && commaIdx != -1) {
                        imageBase64.substring(5, imageBase64.indexOf(";"))
                    } else "image/jpeg"

                    val prompt = """
You read handwritten aluminium-window measurements from a camera photo of white paper or a screenshot of a Notepad measurement list.
Find measurement rows in top-to-bottom order. Serial numbers may start at any value and may skip or repeat (for example 15, 16, 17, 18 or 40, 41, 45). Preserve each visible serial exactly; never renumber rows to 1, 2, 3, and never require numbering to begin at 1. A serial may be followed by a dot, slash, dash, comma, right parenthesis, or spaces (examples: "1.", "2/", "40,"). Treat that leading number and its punctuation as the serial only; never include it in a dimension. If a serial truly is not visible, return an empty serial instead of inventing one.

For each numbered row, locate the first X, x, or ×:
- height = the complete outer-side (O.S.) value to the left of X.
- length1 = the first value immediately to the right of X. If two values are stacked with a visible separating line, it is the value above the line.
- length2 = the second value when it is visibly written below the line OR when two complete right-side values are separated by a slash or hyphen. In slash/hyphen pairs, keep the first as length1 and the second as length2.
- A slash or hyphen followed by only one digit within a value is decimal notation, not a second length. For example, "48/2" means length1 "48.2" and length2 "".
- Examples: "149.7/150" after X means length1 "149.7", length2 "150"; "88.8-88.5" means length1 "88.8", length2 "88.5".

Within a single value, a slash, dash, or dot between digits may be decimal notation and must be normalized to a dot. For example, "136/5 x 48-2" becomes height "136.5", length1 "48.2", length2 "". Do not confuse punctuation after the leading serial with a dimension separator.
Ignore headings and notes without a numbered measurement row. Preserve row order and serial numbers. Do not skip any valid row. Return only valid rows and output ONLY JSON in this exact shape, with every value as a string and no Markdown: {"items":[{"serial":"1","height":"136.5","length1":"48.2","length2":""}]}
                    """.trimIndent()

                    val apiKey = getGeminiApiKey().takeUnless { it.isBlank() || it == "MY_GEMINI_API_KEY" }
                    if (apiKey != null) {
                        val aiResult = scanWithGemini(imageBase64, mimeType, base64Data, prompt, apiKey)
                        if (aiResult != null) {
                            postCallback(callbackJsName, aiResult.toString(), null)
                            return@launch
                        }
                    }

                    // Keyless/offline fallback: bundled ML Kit OCR runs on the selected image.
                    val localResult = scanWithOnDeviceOcr(imageBase64)
                    postCallback(callbackJsName, localResult.toString(), null)
                } catch (e: Exception) {
                    Log.e("PhotoScan", "Photo scan failed", e)
                    postCallback(callbackJsName, null, "Could not read this photo. Try a clear, close-up image.")
                }
            }
        }

        private fun scanWithGemini(
            imageBase64: String,
            mimeType: String,
            base64Data: String,
            prompt: String,
            apiKey: String
        ): JSONObject? {
            val models = listOf("gemini-3.8-flash")
            val scanClient = httpClient.newBuilder()
                .connectTimeout(8, TimeUnit.SECONDS)
                .readTimeout(20, TimeUnit.SECONDS)
                .writeTimeout(20, TimeUnit.SECONDS)
                .callTimeout(25, TimeUnit.SECONDS)
                .build()
            for (model in models) {
                try {
                    val url = "https://generativelanguage.googleapis.com/v1beta/models/$model:generateContent?key=$apiKey"
                    val requestJson = JSONObject().apply {
                        val contents = JSONArray().apply {
                            put(JSONObject().apply {
                                val parts = JSONArray().apply {
                                    put(JSONObject().apply { put("text", prompt) })
                                    put(JSONObject().apply {
                                        put("inline_data", JSONObject().apply {
                                            put("mime_type", mimeType)
                                            put("data", base64Data)
                                        })
                                    })
                                }
                                put("parts", parts)
                            })
                        }
                        put("contents", contents)
                        put("generationConfig", JSONObject().apply {
                            put("response_mime_type", "application/json")
                        })
                    }

                    val body = requestJson.toString().toRequestBody("application/json; charset=utf-8".toMediaType())
                    val request = Request.Builder().url(url).post(body).build()
                    scanClient.newCall(request).execute().use { response ->
                        if (!response.isSuccessful) return@use
                        val responseJson = JSONObject(response.body?.string().orEmpty())
                        val text = responseJson.optJSONArray("candidates")
                            ?.optJSONObject(0)?.optJSONObject("content")
                            ?.optJSONArray("parts")?.optJSONObject(0)?.optString("text")
                            ?.trim().orEmpty()
                        if (text.isNotEmpty()) {
                            val cleaned = text.removePrefix("```").removeSuffix("```").trim()
                            val jsonStart = cleaned.indexOf('{')
                            val jsonEnd = cleaned.lastIndexOf('}')
                            if (jsonStart >= 0 && jsonEnd > jsonStart) {
                                val parsed = JSONObject(cleaned.substring(jsonStart, jsonEnd + 1))
                                if (parsed.optJSONArray("items") != null) return parsed
                            }
                        }
                    }
                } catch (e: Exception) {
                    Log.w("PhotoScan", "Gemini scan attempt failed; trying local OCR", e)
                }
            }
            return null
        }

        private fun scanWithOnDeviceOcr(imageBase64: String): JSONObject {
            val commaIndex = imageBase64.indexOf(',')
            val encoded = if (commaIndex >= 0) imageBase64.substring(commaIndex + 1) else imageBase64
            val imageBytes = Base64.decode(encoded, Base64.DEFAULT)
            val bitmap = BitmapFactory.decodeByteArray(imageBytes, 0, imageBytes.size)
                ?: throw IllegalArgumentException("Invalid image")
            val recognizer = TextRecognition.getClient(TextRecognizerOptions.DEFAULT_OPTIONS)
            try {
                val recognizedPasses = mutableListOf<String>()
                val overlap = maxOf(1, bitmap.height / 12)
                for (index in 0 until 3) {
                    val top = maxOf(0, index * bitmap.height / 3 - overlap / 2)
                    val bottom = minOf(bitmap.height, (index + 1) * bitmap.height / 3 + overlap / 2)
                    if (bottom <= top) continue
                    val crop = Bitmap.createBitmap(bitmap, 0, top, bitmap.width, bottom - top)
                    try {
                        val cropText = Tasks.await(recognizer.process(InputImage.fromBitmap(crop, 0))).text
                        recognizedPasses.add(cropText)
                    } finally {
                        crop.recycle()
                    }
                }
                // A final whole-page pass catches rows that cross crop boundaries or sit in columns.
                recognizedPasses.add(Tasks.await(recognizer.process(InputImage.fromBitmap(bitmap, 0))).text)

                val mergedRows = JSONArray()
                val primarySignatures = mutableSetOf<String>()
                recognizedPasses.forEach { text ->
                    val passRows = extractMeasurementRows(text)
                    val signaturesBeforePass = primarySignatures.toSet()
                    for (rowIndex in 0 until passRows.length()) {
                        val row = passRows.getJSONObject(rowIndex)
                        val signature = listOf("serial", "height", "length1", "length2")
                            .joinToString("|") { row.optString(it) }
                        if (signature !in signaturesBeforePass) {
                            mergedRows.put(row)
                            primarySignatures.add(signature)
                        }
                    }
                }
                return JSONObject().put("items", mergedRows)
            } finally {
                recognizer.close()
                bitmap.recycle()
            }
        }

        private fun extractMeasurementRows(recognizedText: String): JSONArray {
            val rows = JSONArray()
            val dimensionPattern = Regex("""([0-9Oo]{1,4}(?:\s*[/.-]\s*[0-9Oo]{1,3})?)\s*[xX×*]\s*(.+)$""")
            val completeLengthPairPattern = Regex("""^\s*([0-9Oo]{1,4}(?:\s*[./-]\s*[0-9Oo]{1,3})?)\s*([/-])\s*([0-9Oo]{2,4}(?:\s*[./-]\s*[0-9Oo]{1,3})?)(?:\s+.*)?$""")
            val singleLengthPattern = Regex("""^\s*([0-9Oo]{1,4}(?:\s*[/.-]\s*[0-9Oo]{1,3})?)""")
            val prefixedRowPattern = Regex("""^\s*(?:item|no\.?|sl\.?|#)?\s*([0-9]{1,3})(?:\s*[.)/:|,\-]\s+|\s+)(.+)$""", RegexOption.IGNORE_CASE)
            val serialOnlyPattern = Regex("""^\s*([0-9]{1,3})\s*[.)/:|,\-]?\s*$""")
            var pendingSerial: String? = null

            fun normalizeDigits(value: String): String = buildString {
                value.forEach { ch ->
                    val digit = when (ch) {
                        in '\u09E6'..'\u09EF' -> ch.code - '\u09E6'.code
                        in '\u0660'..'\u0669' -> ch.code - '\u0660'.code
                        in '\u06F0'..'\u06F9' -> ch.code - '\u06F0'.code
                        else -> -1
                    }
                    append(if (digit >= 0) ('0'.code + digit).toChar() else ch)
                }
            }

            fun decimal(value: String): String = value
                .replace('O', '0').replace('o', '0')
                .replace(Regex("\\s*[/.-]\\s*"), ".")
                .replace(Regex("[^0-9.]"), "")
                .trim('.')

            recognizedText.lineSequence().forEach { rawLine ->
                val line = normalizeDigits(rawLine).trim().trimStart('•', '-', '*', '|').trim()
                if (line.isEmpty()) return@forEach

                val serialOnly = serialOnlyPattern.matchEntire(line)
                if (serialOnly != null) {
                    pendingSerial = serialOnly.groupValues[1]
                    return@forEach
                }

                val prefixed = prefixedRowPattern.matchEntire(line)
                val serial = prefixed?.groupValues?.get(1) ?: pendingSerial
                val body = prefixed?.groupValues?.get(2) ?: line
                val dimensions = dimensionPattern.find(body)
                if (dimensions != null) {
                    val rightSide = dimensions.groupValues[2].trim()
                    val pair = completeLengthPairPattern.matchEntire(rightSide)
                    val single = singleLengthPattern.find(rightSide)
                    val length1 = if (pair != null) pair.groupValues[1] else single?.groupValues?.get(1).orEmpty()
                    val length2 = pair?.groupValues?.get(3).orEmpty()
                    rows.put(JSONObject()
                        .put("serial", serial.orEmpty())
                        .put("height", decimal(dimensions.groupValues[1]))
                        .put("length1", decimal(length1))
                        .put("length2", decimal(length2)))
                    pendingSerial = null
                }
            }
            return rows
        }

        private fun postCallback(callbackName: String, resultJson: String?, errorMessage: String?) {
            activity.runOnUiThread {
                val escapedJson = if (resultJson != null) {
                    JSONObject.quote(resultJson)
                } else "null"
                val escapedErr = if (errorMessage != null) {
                    JSONObject.quote(errorMessage)
                } else "null"

                val js = "if (window['$callbackName']) { window['$callbackName']($escapedJson, $escapedErr); }"
                activity.webViewInstance?.evaluateJavascript(js, null)
            }
        }
    }
}
