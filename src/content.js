import { h, Component, render, createElement } from "preact";
import Floating from "./components/Floating.jsx";

function installFloatingService() {
	const floatingContainer = document.createElement("div");
	const shadowRoot = floatingContainer.attachShadow({ mode: "open" });
	floatingContainer.id = "cr_container"

	// Create a container inside the shadow root
	const shadowContainer = document.createElement("div");
	shadowRoot.appendChild(shadowContainer);

	render(createElement(Floating), shadowContainer);

	// Append the floatingContainer to the document body
	document.body.appendChild(floatingContainer);

	const link = document.createElement("link");
	link.href = chrome.runtime.getURL("css/popup.css");
	link.type = "text/css";
	link.rel = "stylesheet";
	shadowRoot.appendChild(link);
}

function main() {
	installFloatingService();
}

export default main;
