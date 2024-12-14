import fs from "fs";

const rawConfig = {
	name: "Currates - Immersive Currency Converter",
	short_name: "Currates",
	description: "Convert currency in real-time with just select the text.",
	manifest_version: 3,
	version: "1.2",
	icons: {
		16: "./icon/logo/icon-16.png",
		48: "./icon/logo/icon-48.png",
		96: "./icon/logo/icon-96.png",
		128: "./icon/logo/icon-128.png",
	},
	permissions: ["storage"],
	content_scripts: [
		{
			matches: ["<all_urls>"],
			all_frames: true,
			js: ["content.bundle.cjs.js"],
		},
	],
	web_accessible_resources: [
		{
			resources: ["css/main.css", "icon/ygeeker.png"],
			matches: ["<all_urls>"],
		},
	],
	background: {
		service_worker: "background.bundle.cjs.js",
	},
	action: {
		default_icon: {
			16: "./icon/logo/icon-16.png",
			48: "./icon/logo/icon-48.png",
		},
		default_popup: "popup.html",
	},
};

fs.writeFileSync("./dist/manifest.json", JSON.stringify(rawConfig));
