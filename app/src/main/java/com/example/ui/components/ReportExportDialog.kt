package com.example.ui.components

import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import android.content.Intent
import android.widget.Toast
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.ContentCopy
import androidx.compose.material.icons.filled.PictureAsPdf
import androidx.compose.material.icons.filled.Share
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.Dialog
import com.example.model.CalculationResult
import com.example.model.CustomerDetails
import com.example.util.ThaiFabricationMath
import java.text.SimpleDateFormat
import java.util.Date
import java.util.Locale

@Composable
fun ReportExportDialog(
    customerDetails: CustomerDetails,
    thaiSize: String,
    results: List<CalculationResult>,
    onDismiss: () -> Unit
) {
    val context = LocalContext.current
    val totalGlassArea = remember(results) {
        ThaiFabricationMath.calculateTotalGlassAreaSqFt(results)
    }
    val hardwareResult = remember(results, thaiSize) {
        ThaiFabricationMath.calculateHardware(results, thaiSize)
    }

    val reportText = remember(customerDetails, thaiSize, results, totalGlassArea, hardwareResult) {
        buildString {
            appendLine("==========================================")
            appendLine("   ALUMINIUM FABRICATION WORK REPORT     ")
            appendLine("==========================================")
            val dateStr = SimpleDateFormat("dd MMM yyyy, hh:mm a", Locale.getDefault())
                .format(Date())
                .replace(Regex("\\b(am|pm)\\b", RegexOption.IGNORE_CASE)) { it.value.uppercase(Locale.ROOT) }
            appendLine("Date: $dateStr")
            appendLine("Profile System: Thai ${thaiSize}\" Frame")
            if (customerDetails.customerName.isNotBlank()) {
                appendLine("Customer / Project: ${customerDetails.customerName}")
            }
            if (customerDetails.customerPhone.isNotBlank()) {
                appendLine("Phone: ${customerDetails.customerPhone}")
            }
            if (customerDetails.customerLocation.isNotBlank()) {
                appendLine("Location: ${customerDetails.customerLocation}")
            }
            appendLine("Alum Color: ${customerDetails.alumColor}")
            val brand = if (customerDetails.alumBrand == "Others" && customerDetails.otherAlumBrand.isNotBlank()) {
                customerDetails.otherAlumBrand
            } else {
                customerDetails.alumBrand
            }
            appendLine("Alum Brand: $brand")
            appendLine("Glass: ${customerDetails.glassType} (${customerDetails.glassThickness})")
            appendLine("Total Units: ${results.size}")
            appendLine(String.format(Locale.US, "Estimated Glass Area: %.2f Sq.Ft", totalGlassArea))
            appendLine("------------------------------------------")
            appendLine("CUTTING SPECIFICATIONS (CUT-LIST):")
            results.forEachIndexed { idx, res ->
                appendLine("Unit #${idx + 1} [${res.label}]:")
                val unitLabel = if (res.isInchMode) "in" else "cm"
                appendLine("  Input: H ${res.rawHeight}$unitLabel x L1 ${res.rawLength1}$unitLabel${if (res.rawLength2 > 0) " x L2 ${res.rawLength2}$unitLabel" else ""}")
                appendLine("  Outer Frame Side: ${res.outerSide} $unitLabel")
                appendLine("  Outer Frame Top: ${res.outerTop} $unitLabel")
                appendLine("  Outer Frame Bottom: ${res.outerBottom} $unitLabel")
                appendLine("  Shutter Lock: ${res.lockVal} $unitLabel")
                appendLine("  Shutter Top/Bottom: ${res.shutterTopBottom} $unitLabel")
                appendLine("  Glass Size (H x L): ${res.glassHeightInch}\" x ${res.glassLengthInch}\"")
                if (res.netSectionHeight.isNotBlank() && res.netSectionLength.isNotBlank()) {
                    appendLine("  Net Section: H ${res.netSectionHeight} $unitLabel x L ${res.netSectionLength} $unitLabel")
                }
            }
            appendLine("------------------------------------------")
            appendLine("HARDWARE & ACCESSORIES ESTIMATE:")
            hardwareResult.items.forEach { item ->
                appendLine("  • ${item.name}: ${item.value}")
            }
            appendLine("==========================================")
        }
    }

    fun copyToClipboard() {
        val clipboard = context.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
        val clip = ClipData.newPlainText("Fabrication Report", reportText)
        clipboard.setPrimaryClip(clip)
        Toast.makeText(context, "Report copied to clipboard!", Toast.LENGTH_SHORT).show()
    }

    fun shareReport() {
        val intent = Intent(Intent.ACTION_SEND).apply {
            type = "text/plain"
            putExtra(Intent.EXTRA_SUBJECT, "Aluminium Fabrication Report - ${customerDetails.customerName.ifBlank { "Job" }}")
            putExtra(Intent.EXTRA_TEXT, reportText)
        }
        context.startActivity(Intent.createChooser(intent, "Share Fabrication Report"))
    }

    Dialog(onDismissRequest = onDismiss) {
        Card(
            modifier = Modifier
                .fillMaxWidth()
                .fillMaxHeight(0.9f)
                .padding(vertical = 12.dp)
                .testTag("report_export_dialog"),
            shape = MaterialTheme.shapes.extraLarge,
            colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
        ) {
            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(18.dp)
            ) {
                // Top Bar
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Column {
                        Text(
                            text = "Fabrication Report",
                            style = MaterialTheme.typography.titleLarge,
                            fontWeight = FontWeight.Bold,
                            color = MaterialTheme.colorScheme.onSurface
                        )
                        Text(
                            text = "Thai ${thaiSize}\" Profile • ${results.size} Units",
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.primary
                        )
                    }

                    Row {
                        IconButton(
                            onClick = { shareReport() },
                            modifier = Modifier.testTag("share_report_icon_button")
                        ) {
                            Icon(Icons.Default.Share, contentDescription = "Share Report", tint = MaterialTheme.colorScheme.primary)
                        }
                        IconButton(
                            onClick = { copyToClipboard() },
                            modifier = Modifier.testTag("copy_report_icon_button")
                        ) {
                            Icon(Icons.Default.ContentCopy, contentDescription = "Copy Report", tint = MaterialTheme.colorScheme.primary)
                        }
                        IconButton(
                            onClick = onDismiss,
                            modifier = Modifier.testTag("close_report_button")
                        ) {
                            Icon(Icons.Default.Close, contentDescription = "Close")
                        }
                    }
                }

                Spacer(modifier = Modifier.height(10.dp))

                // Scrollable content
                LazyColumn(
                    modifier = Modifier.weight(1f),
                    verticalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    // Summary Card
                    item {
                        Card(
                            colors = CardDefaults.cardColors(
                                containerColor = MaterialTheme.colorScheme.primaryContainer.copy(alpha = 0.4f)
                            ),
                            shape = MaterialTheme.shapes.medium
                        ) {
                            Column(modifier = Modifier.padding(12.dp)) {
                                Text(
                                    text = if (customerDetails.customerName.isNotBlank())
                                        customerDetails.customerName
                                    else "Project Specifications",
                                    style = MaterialTheme.typography.titleMedium,
                                    fontWeight = FontWeight.Bold,
                                    color = MaterialTheme.colorScheme.onPrimaryContainer
                                )
                                if (customerDetails.customerPhone.isNotBlank() || customerDetails.customerLocation.isNotBlank()) {
                                    Text(
                                        text = listOfNotNull(
                                            customerDetails.customerPhone.takeIf { it.isNotBlank() },
                                            customerDetails.customerLocation.takeIf { it.isNotBlank() }
                                        ).joinToString(" • "),
                                        style = MaterialTheme.typography.bodySmall,
                                        color = MaterialTheme.colorScheme.onPrimaryContainer.copy(alpha = 0.8f)
                                    )
                                }
                                Spacer(modifier = Modifier.height(6.dp))
                                Row(
                                    modifier = Modifier.fillMaxWidth(),
                                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                                ) {
                                    AssistChip(
                                        onClick = {},
                                        label = { Text("${customerDetails.alumColor} (${customerDetails.alumBrand})") }
                                    )
                                    AssistChip(
                                        onClick = {},
                                        label = { Text("${customerDetails.glassType} ${customerDetails.glassThickness}") }
                                    )
                                }
                                Spacer(modifier = Modifier.height(4.dp))
                                Text(
                                    text = String.format(Locale.US, "Total Glass Area: %.2f Sq.Ft", totalGlassArea),
                                    style = MaterialTheme.typography.labelLarge,
                                    fontWeight = FontWeight.SemiBold,
                                    color = MaterialTheme.colorScheme.primary
                                )
                            }
                        }
                    }

                    // Cut list section header
                    item {
                        Text(
                            text = "Cutting List (${results.size} Units)",
                            style = MaterialTheme.typography.titleSmall,
                            fontWeight = FontWeight.Bold,
                            color = MaterialTheme.colorScheme.primary
                        )
                    }

                    // Cut list items
                    itemsIndexed(results, key = { _, item -> item.id }) { index, item ->
                        Card(
                            colors = CardDefaults.cardColors(
                                containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.5f)
                            ),
                            shape = MaterialTheme.shapes.medium
                        ) {
                            Column(modifier = Modifier.padding(12.dp)) {
                                Row(
                                    modifier = Modifier.fillMaxWidth(),
                                    horizontalArrangement = Arrangement.SpaceBetween,
                                    verticalAlignment = Alignment.CenterVertically
                                ) {
                                    Text(
                                        text = "Unit #${index + 1} (${item.label})",
                                        style = MaterialTheme.typography.bodyMedium,
                                        fontWeight = FontWeight.Bold
                                    )
                                    val u = if (item.isInchMode) "in" else "cm"
                                    Text(
                                        text = "H:${item.rawHeight}$u x L:${item.rawLength1}$u",
                                        style = MaterialTheme.typography.labelSmall,
                                        color = MaterialTheme.colorScheme.onSurfaceVariant
                                    )
                                }
                                Spacer(modifier = Modifier.height(6.dp))
                                val unitStr = if (item.isInchMode) "in" else "cm"
                                Text(
                                    text = "Outer: Side ${item.outerSide}$unitStr | Top ${item.outerTop}$unitStr | Bot ${item.outerBottom}$unitStr",
                                    style = MaterialTheme.typography.bodySmall
                                )
                                Text(
                                    text = "Shutter: Lock ${item.lockVal}$unitStr | T/B ${item.shutterTopBottom}$unitStr",
                                    style = MaterialTheme.typography.bodySmall
                                )
                                Text(
                                    text = "Glass: ${item.glassHeightInch}\" x ${item.glassLengthInch}\"",
                                    style = MaterialTheme.typography.bodySmall,
                                    fontWeight = FontWeight.SemiBold,
                                    color = MaterialTheme.colorScheme.primary
                                )
                                if (item.netSectionHeight.isNotBlank() && item.netSectionLength.isNotBlank()) {
                                    Text(
                                        text = "Mosquito Net: H ${item.netSectionHeight}$unitStr x L ${item.netSectionLength}$unitStr",
                                        style = MaterialTheme.typography.bodySmall,
                                        color = MaterialTheme.colorScheme.tertiary
                                    )
                                }
                            }
                        }
                    }

                    // Hardware section header
                    item {
                        Spacer(modifier = Modifier.height(6.dp))
                        Text(
                            text = "Hardware Requirements",
                            style = MaterialTheme.typography.titleSmall,
                            fontWeight = FontWeight.Bold,
                            color = MaterialTheme.colorScheme.primary
                        )
                    }

                    // Hardware items
                    item {
                        Card(
                            colors = CardDefaults.cardColors(
                                containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.5f)
                            ),
                            shape = MaterialTheme.shapes.medium
                        ) {
                            Column(
                                modifier = Modifier.padding(12.dp),
                                verticalArrangement = Arrangement.spacedBy(4.dp)
                            ) {
                                hardwareResult.items.forEach { hw ->
                                    Row(
                                        modifier = Modifier.fillMaxWidth(),
                                        horizontalArrangement = Arrangement.SpaceBetween
                                    ) {
                                        Text(
                                            text = hw.name,
                                            style = MaterialTheme.typography.bodySmall,
                                            color = MaterialTheme.colorScheme.onSurface
                                        )
                                        Text(
                                            text = hw.value,
                                            style = MaterialTheme.typography.bodySmall,
                                            fontWeight = FontWeight.Bold,
                                            color = MaterialTheme.colorScheme.primary
                                        )
                                    }
                                }
                            }
                        }
                    }
                }

                Spacer(modifier = Modifier.height(12.dp))

                // Bottom Action Buttons
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    OutlinedButton(
                        onClick = { copyToClipboard() },
                        modifier = Modifier
                            .weight(1f)
                            .testTag("dialog_copy_report_button")
                    ) {
                        Icon(Icons.Default.ContentCopy, contentDescription = null, modifier = Modifier.size(16.dp))
                        Spacer(modifier = Modifier.width(4.dp))
                        Text("Copy Text")
                    }

                    Button(
                        onClick = { shareReport() },
                        modifier = Modifier
                            .weight(1f)
                            .testTag("dialog_share_report_button")
                    ) {
                        Icon(Icons.Default.Share, contentDescription = null, modifier = Modifier.size(16.dp))
                        Spacer(modifier = Modifier.width(4.dp))
                        Text("Share")
                    }
                }
            }
        }
    }
}
