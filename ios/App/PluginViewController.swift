import UIKit
import Capacitor

class PluginViewController: CAPBridgeViewController {
    override open func capacitorDidLoad() {
        bridge?.registerPluginInstance(EchoPlugin())
    }
    
    override open func viewDidLoad() {
        super.viewDidLoad()

        // Setup padding after the view has been added to the view hierarchy
        DispatchQueue.main.async {
            self.setupWebViewPadding()
        }
    }

    override open func viewWillAppear(_ animated: Bool) {
        super.viewWillAppear(animated)

        // Setup padding each time the view appears
        DispatchQueue.main.async {
            self.setupWebViewPadding()
        }
    }

    override open func viewWillLayoutSubviews() {
        super.viewWillLayoutSubviews()
        // Setup padding whenever the view's layout changes (e.g., orientation changes)
        setupWebViewPadding()
    }

    private func setupWebViewPadding() {
        guard let webView = self.webView else { return }

        // Fallback to a safe way to get the window and safe area insets
        var topPadding: CGFloat = 0
        var bottomPadding: CGFloat = 0
        var leftPadding: CGFloat = 0
        var rightPadding: CGFloat = 0

        if #available(iOS 13.0, *) {
            let window = view.window ?? UIApplication.shared.windows.first { $0.isKeyWindow }
            topPadding = window?.safeAreaInsets.top ?? 0
            bottomPadding = window?.safeAreaInsets.bottom ?? 0
            leftPadding = window?.safeAreaInsets.left ?? 0
            rightPadding = window?.safeAreaInsets.right ?? 0
        } else {
            topPadding = UIApplication.shared.statusBarFrame.height
        }

        webView.frame.origin = CGPoint(x: leftPadding, y: topPadding)
        webView.frame.size = CGSize(width: UIScreen.main.bounds.width - leftPadding - rightPadding, height: UIScreen.main.bounds.height - topPadding - bottomPadding)
    }
}
