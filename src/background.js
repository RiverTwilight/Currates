const defaultApiKey = "cabbb4fff29349a2a637f2cea009dac7";
const CACHE_UPDATE_FREQUENCY = 3600000; // Default set to 1 hour

async function getRates() {
	// Retrieve the user-provided API key, or use the default
	const { userApiKey } = await chrome.storage.sync.get("apiKey");
	const apiKey = userApiKey || defaultApiKey;
	const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;

	const cache = await chrome.storage.local.get("cachedRates");

	if (
		cache.cachedRates &&
		Date.now() - cache.cachedRates.createAt < CACHE_UPDATE_FREQUENCY
	) {
		console.log("Use cached");
		return cache.cachedRates.data;
	}

	let response = await fetch(apiUrl);
	let data = await response.json();
	let rates = data.rates;

	chrome.storage.local.set({
		cachedRates: {
			createAt: Date.now(),
			data: rates,
		},
	});

	return rates;
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.type === "GetRates") {
		(async () => {
			try {
				let rates = await getRates();

				sendResponse({
					data: rates,
				});
			} catch (error) {
				console.error("Error fetching exchange rates:", error);
				sendResponse({ error: "Error fetching exchange rates" });
			}
		})();
	}

	// Return true to indicate that sendResponse will be called asynchronously
	return true;
});
