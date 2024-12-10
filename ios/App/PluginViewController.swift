import UIKit
import Capacitor

class PluginViewController: CAPBridgeViewController {
    override open func viewDidLoad() {
        super.viewDidLoad()

        DispatchQueue.main.async {
            self.setupWebViewPadding()
        }
    }

    override open func viewWillLayoutSubviews() {
        super.viewWillLayoutSubviews()

        setupWebViewPadding()
    }

    private func setupWebViewPadding() {
        guard let webView = self.webView, !webView.isLoading else { return } // Ensure webView is ready

        var topPadding: CGFloat = 0
        var bottomPadding: CGFloat = 0
        var leftPadding: CGFloat = 0
        var rightPadding: CGFloat = 0

        if #available(iOS 13.0, *) {
            let window = view.window ?? UIApplication.shared.connectedScenes
                .compactMap { $0 as? UIWindowScene }
                .first?.windows
                .first(where: { $0.isKeyWindow })
            topPadding = window?.safeAreaInsets.top ?? 0
            bottomPadding = window?.safeAreaInsets.bottom ?? 0
            leftPadding = window?.safeAreaInsets.left ?? 0
            rightPadding = window?.safeAreaInsets.right ?? 0
        }

        let newFrame = CGRect(
            x: leftPadding,
            y: topPadding,
            width: UIScreen.main.bounds.width - leftPadding - rightPadding,
            height: UIScreen.main.bounds.height - topPadding - bottomPadding
        )
        if webView.frame != newFrame {
            webView.frame = newFrame
        }
    }
}
