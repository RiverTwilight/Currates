import { h, Component, render } from "preact";
import { useState, useEffect } from "preact/hooks";

function Header() {
	return (
		<header class="cr-bg-themed cr-z-10">
			<div class="cr-mx-auto cr-flex cr-p-1 cr-justify-center cr-items-center">
				<h1 class="cr-text-xl cr-text-white">Preference</h1>
			</div>
		</header>
	);
}

const App = () => {
	const [apiKey, setApiKey] = useState("");

	useEffect(() => {
		chrome.storage.sync.get(["apiKey"], (result) => {
			if (result.apiKey) {
				setApiKey(result.apiKey);
			}
		});
	}, []);

	const handleApiKeyChange = (e) => {
		const newApiKey = e.target.value;
		setApiKey(newApiKey);
		chrome.storage.sync.set({ apiKey: newApiKey });
	};

	const handleExternalLink = (url) => {
		chrome.tabs.create({ url });
	};

	return (
		<div className="cr-w-72 cr-bg-slate-100 cr-pb-4">
			<Header />
			<div className="cr-relative cr-container cr-mx-auto cr-flex">
				<main className="cr-flex-1 cr-rounded cr-overflow-hidden cr-w-full">
					<br />
					<div className="cr-px-2 cr-py-1 cr-flex cr-justify-between cr-items-center cr-w-full cr-bg-white">
						<label className="cr-text-base">OE API</label>
						<input
							type="text"
							value={apiKey}
							onChange={handleApiKeyChange}
							placeholder="cab****dac7"
							className="cr-input cr-p-1 focus:cr-border-none hover:cr-cursor-text"
						/>
					</div>
					<div className="cr-text-slate-500 cr-p-2">
						An OpenExchange API allows you request rates more
						frequently. It's recommend for you to apply your own
						FREE API key.
						<span
							onClick={() =>
								handleExternalLink(
									"https://www.ygeeker.com/support/currates/intro"
								)
							}
							className="cr-text-blue-500 hover:cr-cursor-pointer hover:cr-underline"
						>
							&nbsp;Learn More...
						</span>
					</div>
					<div className="cr-mt-2">
						<div
							onClick={() =>
								handleExternalLink(
									"https://github.com/rivertwilight/currates"
								)
							}
							className="cr-px-2 cr-py-1 cr-flex cr-justify-between cr-items-center cr-w-full cr-bg-white hover:cr-cursor-pointer hover:cr-bg-slate-50"
						>
							<label className="cr-text-base">GitHub</label>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								viewBox="0 -960 960 960"
								width="24"
								className="cr-fill-slate-400"
							>
								<path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h240q17 0 28.5 11.5T480-800q0 17-11.5 28.5T440-760H200v560h560v-240q0-17 11.5-28.5T800-480q17 0 28.5 11.5T840-440v240q0 33-23.5 56.5T760-120H200Zm560-584L416-360q-11 11-28 11t-28-11q-11-11-11-28t11-28l344-344H600q-17 0-28.5-11.5T560-800q0-17 11.5-28.5T600-840h240v240q0 17-11.5 28.5T800-560q-17 0-28.5-11.5T760-600v-104Z" />
							</svg>
						</div>
						<div className="cr-text-slate-500 cr-p-2">
							Currates is totally free. Give us a star on GitHub
							to support us if you like it!
						</div>
					</div>
					<div className="cr-mt-4 cr-flex cr-flex-col cr-justify-center cr-items-center">
						<div className="cr-border-slate-400 cr-rounded-full">
							<img
								height={56}
								width={56}
								src={chrome.runtime.getURL("icon/ygeeker.png")}
							></img>
						</div>
						<span className="cr-mt-2 cr-text-sm cr-text-slate-400">
							A Work From
						</span>
						<div className="cr-text-lg">
							<span
								onClick={() =>
									handleExternalLink(
										"https://www.ygeeker.com"
									)
								}
								className="hover:cr-cursor-pointer hover:cr-underline"
							>
								YGeeker
							</span>
						</div>
						<div className="cr-flex cr-mt-2 cr-text-slate-500 cr-space-x-1">
							<span
								onClick={() =>
									handleExternalLink(
										"https://www.ygeeker.com/support/currates/intro"
									)
								}
								className="px-2 hover:cr-cursor-pointer hover:cr-underline"
							>
								Help
							</span>
							<span>·</span>
							<span
								onClick={() =>
									handleExternalLink(
										"https://www.ygeeker.com/support/currates/legal/term-of-use"
									)
								}
								className="px-2 hover:cr-cursor-pointer hover:cr-underline"
							>
								Terms
							</span>
							<span>·</span>
							<span
								onClick={() =>
									handleExternalLink(
										"https://www.ygeeker.com/support/currates/intro"
									)
								}
								className="px-2 hover:cr-cursor-pointer hover:cr-underline"
							>
								Feedback
							</span>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

render(<App />, document.body);
