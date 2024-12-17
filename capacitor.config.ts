import type { CapacitorConfig } from "@capacitor/cli"

const config: CapacitorConfig = {
    appId: "com.satellite.uplink.app",
    appName: "Uplink",
    webDir: "build",
    plugins: {
        SplashScreen: {
            launchShowDuration: 5000,
            launchAutoHide: true,
        },
    },
}

export default config
