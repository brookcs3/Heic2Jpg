import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { applyThemeColors } from "./lib/theme";
import { siteConfig, heic2JpgConfig } from "./config";

// Force Heic2Jpg configuration for this project
const appConfig = heic2JpgConfig;

// Define the global APP_CONFIG object for runtime access
(window as any).APP_CONFIG = appConfig;

// Apply theme colors based on site configuration
applyThemeColors();

// Log site configuration for debugging
console.log(`Running in Heic2Jpg mode with configuration:`, appConfig);

// Prefetch FFmpeg resources - initializing it in DropConvert component
const ffmpeg = new FFmpeg();

createRoot(document.getElementById("root")!).render(<App />);
