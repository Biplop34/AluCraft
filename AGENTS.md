# App UI conventions

- Every new screen or standalone page must use the shared `app_theme` preference (`light`, `dark`, or `system`) and match the app's active theme on Android and Windows.
- For standalone or embedded pages, initialize the theme from the shared storage key, respond to system theme changes when the preference is `system`, and provide matching light and dark styles for the page's UI.
- Keep saved invoice artwork white for printing; theme changes apply to the app interface around it.
