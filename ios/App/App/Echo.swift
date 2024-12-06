import Capacitor
import UIKit

@objc(EchoPlugin)
public class EchoPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "EchoPlugin"
    public let jsName = "Echo"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "echo", returnType: CAPPluginReturnPromise)
    ]

    @objc func echo(_ call: CAPPluginCall) {
        let value = call.getString("color") ?? ""
        guard let uiColor = UIColor(hex: value) else {
              call.reject("Invalid color format")
              return
          }
    
        DispatchQueue.main.async {
                 if #available(iOS 13.0, *) {
                     // Find the active window in iOS 13 or later
                     if let window = UIApplication.shared.connectedScenes
                         .compactMap({ $0 as? UIWindowScene })
                         .flatMap({ $0.windows })
                         .first(where: { $0.isKeyWindow }) {
                         
                         window.backgroundColor = uiColor // Set the background color
                         call.resolve(["value": "Color set successfully"])
                     } else {
                         call.reject("No active window found")
                     }
                 } else {
                     // For iOS 12 and earlier
                     if let window = UIApplication.shared.keyWindow {
                         window.backgroundColor = uiColor
                         call.resolve(["value": "Color set successfully"])
                     } else {
                         call.reject("No key window found")
                     }
                 }
             }
        
        call.resolve(["value": value])
    }
}

extension UIColor {
    convenience init?(hex: String) {
        var hexSanitized = hex.trimmingCharacters(in: .whitespacesAndNewlines).uppercased()

        if hexSanitized.hasPrefix("#") {
            hexSanitized.remove(at: hexSanitized.startIndex)
        }

        var rgb: UInt64 = 0
        guard Scanner(string: hexSanitized).scanHexInt64(&rgb) else { return nil }

        let length = hexSanitized.count
        switch length {
        case 6: // RGB
            self.init(
                red: CGFloat((rgb & 0xFF0000) >> 16) / 255.0,
                green: CGFloat((rgb & 0x00FF00) >> 8) / 255.0,
                blue: CGFloat(rgb & 0x0000FF) / 255.0,
                alpha: 1.0
            )
        case 8: // RGBA
            self.init(
                red: CGFloat((rgb & 0xFF000000) >> 24) / 255.0,
                green: CGFloat((rgb & 0x00FF0000) >> 16) / 255.0,
                blue: CGFloat((rgb & 0x0000FF00) >> 8) / 255.0,
                alpha: CGFloat(rgb & 0x000000FF) / 255.0
            )
        default:
            return nil
        }
    }
}
