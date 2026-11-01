package com.example.ui.screens

import androidx.activity.compose.BackHandler
import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.example.data.CalculatorRepository
import com.example.ui.components.HistoryDialog
import com.example.ui.components.SutaInfoDialog

enum class AppTab {
    THAI_FABRICATION,
    BASE8_MATH,
    HISTORY
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HubScreen(
    repository: CalculatorRepository
) {
    var selectedTab by remember { mutableStateOf(AppTab.THAI_FABRICATION) }
    var showHistoryDialog by remember { mutableStateOf(false) }
    var showSutaGuide by remember { mutableStateOf(false) }
    var historyList by remember { mutableStateOf(repository.getSavedJobs()) }

    BackHandler(enabled = selectedTab != AppTab.THAI_FABRICATION) {
        selectedTab = AppTab.THAI_FABRICATION
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.SpaceBetween,
                        verticalAlignment = androidx.compose.ui.Alignment.CenterVertically
                    ) {
                        Column {
                            Text(
                                text = "AluCraft",
                                style = MaterialTheme.typography.titleLarge,
                                fontWeight = FontWeight.ExtraBold,
                                color = MaterialTheme.colorScheme.primary
                            )
                            Text(
                                text = when (selectedTab) {
                                    AppTab.THAI_FABRICATION -> "Thai Profile & Glass Cutting List"
                                    AppTab.BASE8_MATH -> "Precision Suta Workshop Lab"
                                    AppTab.HISTORY -> "Saved Projects & Specs"
                                },
                                style = MaterialTheme.typography.labelSmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                    }
                },
                actions = {
                    IconButton(
                        onClick = { showSutaGuide = true },
                        modifier = Modifier.testTag("hub_suta_guide_btn")
                    ) {
                        Icon(Icons.Default.HelpOutline, contentDescription = "Suta Guide")
                    }
                    IconButton(
                        onClick = {
                            historyList = repository.getSavedJobs()
                            showHistoryDialog = true
                        },
                        modifier = Modifier.testTag("hub_history_btn")
                    ) {
                        Icon(Icons.Default.History, contentDescription = "History")
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.surface
                )
            )
        },
        bottomBar = {
            NavigationBar(
                modifier = Modifier.testTag("bottom_nav_bar")
            ) {
                NavigationBarItem(
                    selected = selectedTab == AppTab.THAI_FABRICATION,
                    onClick = { selectedTab = AppTab.THAI_FABRICATION },
                    icon = { Icon(Icons.Default.Window, contentDescription = null) },
                    label = { Text("Thai Cutting") },
                    modifier = Modifier.testTag("nav_thai_fab")
                )
                NavigationBarItem(
                    selected = selectedTab == AppTab.BASE8_MATH,
                    onClick = { selectedTab = AppTab.BASE8_MATH },
                    icon = { Icon(Icons.Default.Calculate, contentDescription = null) },
                    label = { Text("Calculator") },
                    modifier = Modifier.testTag("nav_base8_math")
                )
                NavigationBarItem(
                    selected = selectedTab == AppTab.HISTORY,
                    onClick = {
                        historyList = repository.getSavedJobs()
                        showHistoryDialog = true
                    },
                    icon = { Icon(Icons.Default.FolderOpen, contentDescription = null) },
                    label = { Text("History") },
                    modifier = Modifier.testTag("nav_history")
                )
            }
        }
    ) { innerPadding ->
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
        ) {
            when (selectedTab) {
                AppTab.THAI_FABRICATION -> {
                    ThaiFabricationScreen(
                        repository = repository,
                        onOpenHistory = {
                            historyList = repository.getSavedJobs()
                            showHistoryDialog = true
                        }
                    )
                }
                AppTab.BASE8_MATH -> {
                    Base8MathScreen(repository = repository)
                }
                AppTab.HISTORY -> {
                    // Show history modal and default back to Thai screen
                    LaunchedEffect(Unit) {
                        historyList = repository.getSavedJobs()
                        showHistoryDialog = true
                        selectedTab = AppTab.THAI_FABRICATION
                    }
                }
            }
        }
    }

    if (showHistoryDialog) {
        HistoryDialog(
            history = historyList,
            onDismiss = { showHistoryDialog = false },
            onRestore = { job ->
                // Handled in ThaiFabricationScreen via persistent repository reload
                showHistoryDialog = false
                selectedTab = AppTab.THAI_FABRICATION
            },
            onDelete = { jobId ->
                repository.deleteJob(jobId)
                historyList = repository.getSavedJobs()
            },
            onClearAll = {
                repository.clearAllJobs()
                historyList = emptyList()
            }
        )
    }

    if (showSutaGuide) {
        SutaInfoDialog(onDismiss = { showSutaGuide = false })
    }
}
