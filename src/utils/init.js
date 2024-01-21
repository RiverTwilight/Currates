import fs from "fs";

const rawConfig = {
	name: "Currency - Better Currency Converter",
	manifest_version: 3,
	version: "1.0",
	icons: {
		16: "./icon/android-icon-36x36.png",
		48: "./icon/android-icon-48x48.png",
		96: "./icon/android-icon-96x96.png",
		128: "./icon/icon-128.png",
	},
	options_page: "options.html",
	permissions: ["storage"],
	content_scripts: [
		{
			matches: ["<all_urls>"],
			js: ["content.bundle.cjs.js"],
		},
	],
	web_accessible_resources: [
		{
			resources: ["css/popup.css"],
			matches: ["<all_urls>"],
		},
	],
	background: {
		service_worker: "background.js",
	},
	action: {
		default_popup: "popup.html",
		default_icon: {
			16: "./icon/android-icon-36x36.png",
			48: "./icon/android-icon-48x48.png",
		},
	},
};

fs.writeFileSync("./dist/manifest.json", JSON.stringify(rawConfig));
