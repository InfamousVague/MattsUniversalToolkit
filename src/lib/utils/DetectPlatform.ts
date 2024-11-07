export enum Platform {
    Windows = "Windows",
    MacOS = "MacOS",
    Android = "Android",
    iOS = "iOS",
    Linux = "Linux",
    Other = "Other",
}

export function detectPlatform(): Platform {
    const userAgent = navigator.userAgent.toLowerCase()

    if (userAgent.includes("windows")) return Platform.Windows
    if (userAgent.includes("mac")) return Platform.MacOS
    if (userAgent.includes("android")) return Platform.Android
    if (/iphone|ipad|ipod/.test(userAgent)) return Platform.iOS
    if (userAgent.includes("linux")) return Platform.Linux
    return Platform.Other
}
