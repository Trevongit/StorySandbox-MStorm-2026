// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::Manager;

// 🧪 Creative Command: Scan the MStorm folder for assets (Inspired by Moviestorm legacy)
// This is the beginning of the "2026 Ingestion" engine
#[tauri::command]
fn scan_mstorm_assets(path: String) -> String {
    println!("Scanning Moviestorm assets at: {}", path);
    // Logic will be added here to parse the Java-based MStorm/Moviestorm directory
    // and map the models to our modern JSON/GLTF format.
    format!("Found assets in {}", path)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![scan_mstorm_assets])
        .setup(|app| {
            // Setup logic (e.g., preparing the local file-system sandbox)
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
