'use strict';

const apiKey = "cabbb4fff29349a2a637f2cea009dac7";
const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;
const CACHE_UPDATE_FREQUENCY = 3600000;
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === "GetRates") {
    (async () => {
      try {
        let rates = await getRates();
        sendResponse({
          data: rates
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
