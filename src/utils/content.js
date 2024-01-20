import { convertToNumeric } from "./helpers";

function createPopup(x, y) {
	let popup = document.createElement("div");
	popup.style.position = "absolute";
	popup.style.left = `${x}px`;
	popup.style.top = `${y}px`;
	popup.style.padding = "5px";
	popup.style.background = "white";
	popup.style.border = "1px solid black";
	popup.style.zIndex = "1000";
	popup.id = "currencyConverterPopup";
	popup.textContent = "Loading...";
	document.body.appendChild(popup);
}

function updatePopupContent(content) {
	let popup = document.getElementById("currencyConverterPopup");
	if (popup) {
		popup.textContent = content;
	}
}

function extractAmount(rawText) {
	// Regex for currencies starting with a symbol, including commas
	let symbolRegex = /([\$¥](\d{1,3}(?:,\d{3})*(?:\.\d+)?))/;
	// Regex for currencies ending with a word, including large number words
	let wordRegex =
		/((\d{1,3}(?:,\d{3})*\s?(?:billion|million|thousand)?)\s(euros|euro|dollars|元))/i;

	let symbolMatch = rawText.match(symbolRegex);
	let wordMatch = rawText.match(wordRegex);

	let amountMatched = symbolMatch
		? symbolMatch[2]
		: wordMatch
		? wordMatch[2]
		: null;

	let textMatched = symbolMatch
		? symbolMatch[0]
		: wordMatch
		? wordMatch[0]
		: null;

	console.log("SymbolMatch: ", symbolMatch);
	console.log("WordMatch: ", wordMatch);
	console.log("AmountMatch: ", amountMatched);

	let currency = "USD";

	if (textMatched.match(/(dollar|dollars|\$)/i)) {
		currency = "USD";
	} else if (textMatched.match(/(euro|euros)/i)) {
		currency = "EUR";
	}

	return {
		currency,
		amount: convertToNumeric(amountMatched),
	};
}

function main() {
	document.addEventListener("mouseup", async function (e) {
		let selectedText = window.getSelection().toString();
		if (selectedText) {
			const extractedAmount = extractAmount(selectedText);

			console.log(extractedAmount);

			if (extractedAmount) {
				createPopup(e.clientX, e.clientY);
				const res = await chrome.runtime.sendMessage({
					type: "convert",
					amount: extractedAmount.amount,
					currency: extractedAmount.currency,
				});
				console.log(res);

				updatePopupContent(`${res.convertedAmount} CNY`);
			}
		}
	});
}

export default main;
