function convertToNumeric(amountStr) {
	// Remove commas
	let amount = amountStr.replace(/,/g, "");

	// Convert words like 'billion', 'million' to numeric values
	let multiplier = 1;
	if (amount.match(/billion/i)) {
		multiplier = 1e9;
	} else if (amount.match(/million/i)) {
		multiplier = 1e6;
	} else if (amount.match(/thousand/i)) {
		multiplier = 1e3;
	}
	amount = amount.replace(/(billion|million|thousand)/i, "").trim();

	// Parse the numeric value
	return parseFloat(amount) * multiplier;
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

export { convertToNumeric, extractAmount };
