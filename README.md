# capacitor-startup-flash

demo for the flash issue

# steps

- npm install
- ionic cap run ios

# changing background color for webview

at xcode locate the POD file `CAPBridgeViewController.swift` and then add this code below the line `webView?.scrollView.bounces = false` inside method `loadView()`

```
    webView?.backgroundColor = UIColor(red:0.04, green:0.04, blue:0.04, alpha:1.0)
    webView?.scrollView.backgroundColor = UIColor(red:0.04, green:0.04, blue:0.04, alpha:1.0)
```

or

```
    webView?.isOpaque = false
    webView?.backgroundColor = UIColor.clear
    webView?.scrollView.backgroundColor = UIColor.clear
```
