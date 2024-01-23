<div align="center">

<a href="https://www.ygeeker.com">
  <img width="180" src="./dist/icon/android-icon-192x192.png">
</a>

<h1 align="center">Current</h1>

[![Release](https://img.shields.io/github/release/rivertwilight/timeline.svg)](https://github.com/rivertwilight/timeline/releases)

</div>

This browser extension can immersively convert the currency to your local currency simply by selecting the text in the webpage.

https://github.com/RiverTwilight/Timeline/assets/52880665/57179574-3c24-48ea-b21d-44cdf3ce444a

## Features

-   [x] Detect & convert currency by selecting text
-   [x] Display multiple results in one screen
-   [x] Estimate value based on items
-   [x] Full open-source, no privacy worry
-   [x] Tiny & Super fast (Only 2kb packed size)
-   [-] Exception List
-   [-] Customize OpenExchange key

## Get Current

-   [Chrome Web Store](https://chrome.google.com/webstore/detail/timeline-x-history/fdmmhjkfeembndibfcpiaohjhlnafnpd?hl=en-US)
-   Firefox Add-ons (Working)
-   Edge Add-ons (Working)

## Contribution

```bash
yarn run dev # Start Rollup server
yarn run dev:style # Start Tailwind server
```

The you can load the unpacked extension from `dist` in the extension setting page.

Open `test/index.html` to test the extension.

### How hot-load server works

Do not modify `manifest.json` directly in the `dist` folder. Edit `init.js` instead.

### How it works

After user opened a webpage, the extension will:

1. Create a shadow root node in the original page
2. Render React app to the root
3. Inject prefixed style to the page
4. The React app listen to the mouse event

## License

MIT.

Copyright © 2024 YGeeker
