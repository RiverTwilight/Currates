'use strict';

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === "convert") {
    (async () => {
      try {
        let rates = await getRates();
        let targetCurrency = ["USD", "EUR", "JPY", "CNY"];
        let res = targetCurrency.map(tarCur => {
          return {
            amount: convertAmount(request.amount, request.currency, tarCur, rates),
            currency: tarCur
          };
        });
        console.log("====>", res);
        sendResponse({
          data: res
        });
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
        sendResponse({
          error: "Error fetching exchange rates"
        });
      }
    })();
  } else if (request.type === "equal") {
    return {
      amount: 1,
      items: "apple"
    };
  }

  // Return true to indicate that sendResponse will be called asynchronously
  return true;
});
function convertAmount(amountStr, originalCurrency, targetCurrency, rates) {
  let value = parseFloat(amountStr);
  return value / rates[originalCurrency] * rates[targetCurrency];
}
async function getRates() {
  let apiKey = "cabbb4fff29349a2a637f2cea009dac7"; // Replace with your API key
  let apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;

  // chrome.storage.local.set({
  // 	convertedAmount: convertedAmount,
  // });

  let response = await fetch(apiUrl);
  let data = await response.json();
  let rates = data.rates;
  return rates;
}
