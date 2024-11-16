import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.satellite.uplink.app",
  appName: "Uplink",
  webDir: "build",

  ios: {
    // Set contentInset to "automatic" to handle safe areas
    contentInset: "automatic",  // Ensures proper padding for status bar and bottom bar
    cordova: {
      preferences: {
        StatusBarOverlaysWebView: "true",  // Ensures status bar doesn't push content
        KeyboardResizeMode: "ionic",       // Prevents keyboard from resizing content
        UIScrollViewContentInsetAdjustmentBehavior: "automatic",  // Automatically adjusts the scroll view content inset
      }
    }
  }
};

export default config;
