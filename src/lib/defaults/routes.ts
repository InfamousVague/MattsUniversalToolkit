import { Route, Shape } from "$lib/enums"
import type { NavRoute } from "$lib/types"

// Enum for platforms
enum Platform {
    Windows = "Windows",
    MacOS = "MacOS",
    Android = "Android",
    iOS = "iOS",
    Linux = "Linux",
    Other = "Other",
}

// Function to detect platform
function detectPlatform(): Platform {
    const userAgent = navigator.userAgent.toLowerCase()
    
    if (userAgent.includes("windows")) return Platform.Windows
    if (userAgent.includes("mac")) return Platform.MacOS
    if (userAgent.includes("android")) return Platform.Android
    if (/iphone|ipad|ipod/.test(userAgent)) return Platform.iOS
    if (userAgent.includes("linux")) return Platform.Linux
    return Platform.Other
}

// Define the routes
let routes: NavRoute[] = [

    // {
    //     to: Route.Wallet,
    //     icon: Shape.Wallet,
    //     name: "Wallet",
    // },
    {
        to: Route.Chat,
        icon: Shape.ChatBubble,
        name: "Chat",
    },
    {
        to: Route.Friends,
        icon: Shape.Users,
        name: "Friends",
    },
    {
        to: Route.Settings,
        icon: Shape.Cog,
        name: "Settings",
    },
]

// Only add the "Files" route if the platform is not iOS
if (detectPlatform() !== Platform.iOS) {
    routes.push({
        to: Route.Files,
        icon: Shape.Folder,
        name: "Files",
    })
}

// Export the routes array
export { routes }
