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

export { convertToNumeric }
