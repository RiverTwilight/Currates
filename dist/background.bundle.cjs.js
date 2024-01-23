'use strict';

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === "convert") {
    let apiKey = "cabbb4fff29349a2a637f2cea009dac7"; // Replace with your API key
    let apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;
    (async () => {
      try {
        let response = await fetch(apiUrl);
        let data = await response.json();
        let rates = data.rates;
        console.log(rates);
        let convertedAmount = convertAmount(request.amount, request.currency, rates);
        console.log("===>", convertedAmount);
        chrome.storage.local.set({
          convertedAmount: convertedAmount
        });
        sendResponse({
          convertedAmount: convertedAmount
        });
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
        sendResponse({
          error: "Error fetching exchange rates"
        });
      }
    })();
  }
  // Return true to indicate that sendResponse will be called asynchronously
  return true;
});
function convertAmount(amountStr, amountCurrency, rates) {
  console.log(amountCurrency, amountStr, rates);
  let value = parseFloat(amountStr);
  let targetCurrency = "CNY"; // This should be configurable
  return value / rates[amountCurrency] * rates[targetCurrency]; // Assuming USD as base for simplicity
}
