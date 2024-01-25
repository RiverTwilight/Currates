'use strict';

const apiKey = "cabbb4fff29349a2a637f2cea009dac7";
const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;
const CACHE_UPDATE_FREQUENCY = 3600000;
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
  const cache = await chrome.storage.local.get("cachedRates");
  if (cache.cachedRates && Date.now() - cache.cachedRates.createAt < CACHE_UPDATE_FREQUENCY) {
    console.log("Use cached");
    return cache.cachedRates.data;
  }
  let response = await fetch(apiUrl);
  let data = await response.json();
  let rates = data.rates;
  chrome.storage.local.set({
    cachedRates: {
      createAt: Date.now(),
      data: rates
    }
  });
  return rates;
}
