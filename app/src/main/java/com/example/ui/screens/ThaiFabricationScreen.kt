package com.example.ui.screens

import android.content.Context
import android.os.Build
import android.os.VibrationEffect
import android.os.Vibrator
import android.os.VibratorManager
import android.widget.Toast
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.example.data.CalculatorRepository
import com.example.model.CalculationResult
import com.example.model.CustomerDetails
import com.example.model.MeasurementSet
import com.example.model.SavedJob
import com.example.ui.components.*
import com.example.util.ThaiFabricationMath
import java.util.Locale

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ThaiFabricationScreen(
    repository: CalculatorRepository,
    onOpenHistory: () -> Unit,
    modifier: Modifier = Modifier
) {
    val context = LocalContext.current

    var thaiSize by remember { mutableStateOf(repository.getThaiSize()) }
    var customerDetails by remember { mutableStateOf(repository.getCustomerDetails()) }
    var sets by remember {
        mutableStateOf(
            listOf(MeasurementSet(height = "", length1 = "", length2 = ""))
        )
    }
    var results by remember { mutableStateOf<List<CalculationResult>>(emptyList()) }

    var showCustomerDialog by remember { mutableStateOf(false) }
    var showSmartImportDialog by remember { mutableStateOf(false) }
    var showReportDialog by remember { mutableStateOf(false) }

    fun triggerHaptic() {
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                val vibratorManager = context.getSystemService(Context.VIBRATOR_MANAGER_SERVICE) as? VibratorManager
                vibratorManager?.defaultVibrator?.vibrate(VibrationEffect.createPredefined(VibrationEffect.EFFECT_CLICK))
            } else {
                @Suppress("DEPRECATION")
                val vibrator = context.getSystemService(Context.VIBRATOR_SERVICE) as? Vibrator
                @Suppress("DEPRECATION")
                vibrator?.vibrate(15)
            }
        } catch (_: Exception) {}
    }

    // Auto-recalculate whenever sets change if results are already displayed
    fun doCalculate() {
        triggerHaptic()
        val computed = sets.mapNotNull { ThaiFabricationMath.calculateItem(it) }
        results = computed
        if (computed.isEmpty()) {
            Toast.makeText(context, "Please enter valid Height & Length 1", Toast.LENGTH_SHORT).show()
        }
    }

    LaunchedEffect(sets) {
        if (results.isNotEmpty()) {
            results = sets.mapNotNull { ThaiFabricationMath.calculateItem(it) }
        }
    }

    val totalGlassArea = remember(results) {
        ThaiFabricationMath.calculateTotalGlassAreaSqFt(results)
    }

    Scaffold(
        modifier = modifier.testTag("thai_fabrication_screen"),
        floatingActionButton = {
            ExtendedFloatingActionButton(
                onClick = {
                    triggerHaptic()
                    sets = sets + MeasurementSet()
                },
                icon = { Icon(Icons.Default.Add, contentDescription = null) },
                text = { Text("Add Item") },
                modifier = Modifier.testTag("add_item_fab")
            )
        }
    ) { innerPadding ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
                .padding(horizontal = 16.dp),
            verticalArrangement = Arrangement.spacedBy(14.dp),
            contentPadding = PaddingValues(bottom = 96.dp, top = 8.dp)
        ) {
            // Profile & Settings Header
            item {
                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = MaterialTheme.shapes.large,
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.4f))
                ) {
                    Column(modifier = Modifier.padding(14.dp)) {
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Column {
                                Text(
                                    text = "AluCraft",
                                    style = MaterialTheme.typography.titleMedium,
                                    fontWeight = FontWeight.Bold,
                                    color = MaterialTheme.colorScheme.primary
                                )
                                Text(
                                    text = "Window & Door Profile and Glass Cutting List",
                                    style = MaterialTheme.typography.bodySmall,
                                    color = MaterialTheme.colorScheme.onSurfaceVariant
                                )
                            }

                            // Thai Size Selector (3" vs 4")
                            SingleChoiceSegmentedButtonRow {
                                SegmentedButton(
                                    selected = thaiSize == "3",
                                    onClick = {
                                        triggerHaptic()
                                        thaiSize = "3"
                                        repository.setThaiSize("3")
                                    },
                                    shape = SegmentedButtonDefaults.itemShape(index = 0, count = 2)
                                ) {
                                    Text("3\" Std")
                                }
                                SegmentedButton(
                                    selected = thaiSize == "4",
                                    onClick = {
                                        triggerHaptic()
                                        thaiSize = "4"
                                        repository.setThaiSize("4")
                                    },
                                    shape = SegmentedButtonDefaults.itemShape(index = 1, count = 2)
                                ) {
                                    Text("4\" Hvy")
                                }
                            }
                        }

                        Spacer(modifier = Modifier.height(10.dp))
                        HorizontalDivider(thickness = 0.5.dp)
                        Spacer(modifier = Modifier.height(10.dp))

                        // Customer Details Banner
                        Row(
                            modifier = Modifier.fillMaxWidth(),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Column(modifier = Modifier.weight(1f)) {
                                val nameText = if (customerDetails.customerName.isNotBlank()) customerDetails.customerName else "No Client Assigned"
                                Text(
                                    text = nameText,
                                    style = MaterialTheme.typography.labelLarge,
                                    fontWeight = FontWeight.Bold,
                                    color = MaterialTheme.colorScheme.onSurface
                                )
                                val specText = "${customerDetails.alumColor} • ${customerDetails.glassType} (${customerDetails.glassThickness})"
                                Text(
                                    text = specText,
                                    style = MaterialTheme.typography.bodySmall,
                                    color = MaterialTheme.colorScheme.onSurfaceVariant
                                )
                            }

                            OutlinedButton(
                                onClick = {
                                    triggerHaptic()
                                    showCustomerDialog = true
                                },
                                modifier = Modifier.testTag("edit_customer_specs_btn"),
                                contentPadding = PaddingValues(horizontal = 12.dp, vertical = 6.dp)
                            ) {
                                Icon(Icons.Default.Tune, contentDescription = null, modifier = Modifier.size(16.dp))
                                Spacer(modifier = Modifier.width(6.dp))
                                Text("Client Specs")
                            }
                        }
                    }
                }
            }

            // Quick Actions Bar
            item {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    Button(
                        onClick = { doCalculate() },
                        modifier = Modifier
                            .weight(1.3f)
                            .testTag("calculate_all_button")
                    ) {
                        Icon(Icons.Default.Calculate, contentDescription = null, modifier = Modifier.size(18.dp))
                        Spacer(modifier = Modifier.width(6.dp))
                        Text("Calculate All")
                    }

                    OutlinedButton(
                        onClick = {
                            triggerHaptic()
                            showSmartImportDialog = true
                        },
                        modifier = Modifier
                            .weight(1f)
                            .testTag("smart_import_button")
                    ) {
                        Icon(Icons.Default.PlaylistAdd, contentDescription = null, modifier = Modifier.size(18.dp))
                        Spacer(modifier = Modifier.width(4.dp))
                        Text("Notepad")
                    }

                    OutlinedButton(
                        onClick = {
                            triggerHaptic()
                            onOpenHistory()
                        },
                        modifier = Modifier.testTag("history_nav_button")
                    ) {
                        Icon(Icons.Default.History, contentDescription = "History")
                    }
                }
            }

            // Input Measurement Sets
            item {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(
                        text = "Measurement Sets (${sets.size})",
                        style = MaterialTheme.typography.titleSmall,
                        fontWeight = FontWeight.Bold,
                        color = MaterialTheme.colorScheme.onSurface
                    )
                    TextButton(
                        onClick = {
                            triggerHaptic()
                            sets = listOf(MeasurementSet())
                            results = emptyList()
                        },
                        modifier = Modifier.testTag("clear_all_button")
                    ) {
                        Text("Reset Rows", color = MaterialTheme.colorScheme.error)
                    }
                }
            }

            itemsIndexed(sets, key = { _, item -> item.id }) { index, item ->
                MeasurementRowCard(
                    set = item,
                    index = index,
                    onUpdate = { updated ->
                        triggerHaptic()
                        sets = sets.toMutableList().also { it[index] = updated }
                    },
                    onRemove = {
                        triggerHaptic()
                        if (sets.size > 1) {
                            sets = sets.toMutableList().also { it.removeAt(index) }
                        }
                    },
                    onDuplicate = {
                        triggerHaptic()
                        val copy = item.copy(id = System.currentTimeMillis() + (0..9999).random())
                        sets = sets.toMutableList().also { it.add(index + 1, copy) }
                    },
                    canRemove = sets.size > 1
                )
            }

            // Results Section (if calculated)
            if (results.isNotEmpty()) {
                item {
                    Spacer(modifier = Modifier.height(10.dp))
                    Card(
                        modifier = Modifier.fillMaxWidth(),
                        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.primaryContainer),
                        shape = MaterialTheme.shapes.large
                    ) {
                        Row(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(16.dp),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Column {
                                Text(
                                    text = "Cutting Specification Results",
                                    style = MaterialTheme.typography.titleMedium,
                                    fontWeight = FontWeight.Bold,
                                    color = MaterialTheme.colorScheme.onPrimaryContainer
                                )
                                Text(
                                    text = "${results.size} Units • Est. Glass: ${String.format(Locale.US, "%.1f", totalGlassArea)} Sq.Ft",
                                    style = MaterialTheme.typography.bodySmall,
                                    color = MaterialTheme.colorScheme.onPrimaryContainer.copy(alpha = 0.8f)
                                )
                            }

                            Row(horizontalArrangement = Arrangement.spacedBy(6.dp)) {
                                Button(
                                    onClick = {
                                        triggerHaptic()
                                        showReportDialog = true
                                    },
                                    colors = ButtonDefaults.buttonColors(
                                        containerColor = MaterialTheme.colorScheme.primary,
                                        contentColor = MaterialTheme.colorScheme.onPrimary
                                    ),
                                    modifier = Modifier.testTag("export_report_button")
                                ) {
                                    Icon(Icons.Default.Share, contentDescription = null, modifier = Modifier.size(16.dp))
                                    Spacer(modifier = Modifier.width(4.dp))
                                    Text("Report")
                                }

                                IconButton(
                                    onClick = {
                                        triggerHaptic()
                                        val job = SavedJob(
                                            thaiSize = thaiSize,
                                            customerDetails = customerDetails,
                                            sets = sets,
                                            results = results
                                        )
                                        repository.saveJob(job)
                                        Toast.makeText(context, "Job saved to History!", Toast.LENGTH_SHORT).show()
                                    },
                                    modifier = Modifier.testTag("save_job_button")
                                ) {
                                    Icon(
                                        Icons.Default.BookmarkAdd,
                                        contentDescription = "Save Job",
                                        tint = MaterialTheme.colorScheme.onPrimaryContainer
                                    )
                                }
                            }
                        }
                    }
                }

                itemsIndexed(results, key = { _, item -> item.id }) { index, result ->
                    ResultItemCard(result = result, index = index)
                }
            }
        }
    }

    // Dialogs
    if (showCustomerDialog) {
        CustomerDetailsDialog(
            initialDetails = customerDetails,
            onDismiss = { showCustomerDialog = false },
            onSave = { updated ->
                customerDetails = updated
                repository.saveCustomerDetails(updated)
                showCustomerDialog = false
                Toast.makeText(context, "Specifications updated!", Toast.LENGTH_SHORT).show()
            }
        )
    }

    if (showSmartImportDialog) {
        SmartImportDialog(
            onDismiss = { showSmartImportDialog = false },
            onImport = { imported, isAppend ->
                triggerHaptic()
                sets = if (isAppend) {
                    if (sets.size == 1 && sets[0].height.isBlank() && sets[0].length1.isBlank()) {
                        imported
                    } else {
                        sets + imported
                    }
                } else {
                    imported
                }
                doCalculate()
                Toast.makeText(context, "Imported ${imported.size} items!", Toast.LENGTH_SHORT).show()
            }
        )
    }

    if (showReportDialog) {
        ReportExportDialog(
            customerDetails = customerDetails,
            thaiSize = thaiSize,
            results = results,
            onDismiss = { showReportDialog = false }
        )
    }
}
