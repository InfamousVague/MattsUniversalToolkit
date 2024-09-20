import type { CapacitorConfig } from "@capacitor/cli"

const config: CapacitorConfig = {
    appId: "com.uplink.app",
    appName: "Uplink",
    webDir: "build",
    server: {
        url: "https://chat.satellite.im",
    },
}

export default config
