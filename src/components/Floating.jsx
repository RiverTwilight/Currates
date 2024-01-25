import { h, Component, Fragment } from "preact";
import { useEffect, useState, useMemo, useRef } from "preact/hooks";
import {
	extractAmount,
	convertAmount,
	convertTo2Float,
	getSymbol,
} from "../utils/helpers";
import estimateValue from "../utils/estimateValue";
import ItemValue from "./ItemValue";

export default function Floating() {
	const floatingRef = useRef(null);
	const [popupVisible, setPopupVisible] = useState(false);
	const [rawAmount, setRawAmount] = useState(0);
	const [rawCurrency, setRawCurrency] = useState("USD");
	const [rates, setRates] = useState(null);
	const [priorQueue, setPriorQueue] = useState(["USD", "EUR", "JPY", "CNY"]);

	const updatePopupPosition = (x, y) => {
		if (floatingRef.current) {
			const popupWidth = 384;
			const popupHeight = 300;
			const windowWidth = window.innerWidth;
			const windowHeight = window.innerHeight;

			// console.log("Window", `${windowWidth} x ${windowHeight}`);
			// console.log("Click", `${x} , ${y}`);
			// console.log("Floating", `${popupWidth} x ${popupHeight}`);

			// Check if the popup goes beyond the right edge of the window
			if (x + popupWidth > windowWidth) {
				x -= x + popupWidth - windowWidth;
			}

			// Check if the popup goes beyond the bottom edge of the window
			if (y + popupHeight > windowHeight) {
				y -= y + popupHeight - windowHeight;
			}

			floatingRef.current.style.left = `${x}px`;
			floatingRef.current.style.top = `${y}px`;
			floatingRef.current.style.display = "block";
			setPopupVisible(true);
		}
	};

	const hidePopup = () => {
		if (floatingRef.current) {
			floatingRef.current.style.display = "none";
			setPopupVisible(false);
		}
	};

	const [convertRes, itemValue] = useMemo(() => {
		if (!rates) {
			return [[], null];
		}

		let res = priorQueue.map((tarCur) => {
			return {
				amount: convertAmount(rawAmount, rawCurrency, tarCur, rates),
				currency: tarCur,
			};
		});

		let value = estimateValue(
			res.filter((i) => i.currency === "USD")[0].amount
		);

		console.log(res);

		return [res, value];
	}, [rawAmount, rawCurrency, rates, priorQueue]);

	useEffect(() => {
		chrome.runtime.sendMessage(
			{
				type: "GetRates",
			},
			function (data) {
				setRates(data.data);
			}
		);
	}, [rawAmount, rawCurrency]);

	useEffect(() => {
		// Retrieve the stored primary currency array when the component mounts
		chrome.storage.sync.get(["priorQueue"], function (result) {
			if (result.priorQueue && result.priorQueue.length > 0) {
				setPriorQueue(result.priorQueue);
			}
		});
	}, []);

	const handleCurrencyChange = (event) => {
		const newpriorQueue = event.target.value;
		const updatedCurrencyArray = [
			newpriorQueue,
			...priorQueue.filter((c) => c !== newpriorQueue),
		];

		setPriorQueue(updatedCurrencyArray);

		chrome.storage.sync.set(
			{ priorQueue: updatedCurrencyArray },
			function () {
				console.log(
					"Primary currency array updated to",
					updatedCurrencyArray
				);
			}
		);

		handleConvertIntention(rawAmount, rawCurrency);
	};

	const handleConvertIntention = (amount, currency) => {
		setRawAmount(amount);
		setRawCurrency(currency);
	};

	useEffect(() => {
		const handleTextSelection = (e) => {
			let selectedText = window.getSelection().toString();

			if (selectedText && e.target.id !== "cr_container") {
				const extractedAmount = extractAmount(selectedText);
				updatePopupPosition(e.clientX, e.clientY);
				handleConvertIntention(
					extractedAmount.amount,
					extractedAmount.currency
				);
			}
		};

		const handleOutsideClick = (e) => {
			console.log(e.target);
			// Delay handling to ensure it doesn't conflict with the text selection
			setTimeout(() => {
				if (
					popupVisible &&
					floatingRef.current &&
					e.target.id !== "cr_container"
				) {
					hidePopup();
				}
			}, 0);
		};

		document.addEventListener("mouseup", handleTextSelection);
		document.addEventListener("click", handleOutsideClick);

		return () => {
			document.removeEventListener("mouseup", handleTextSelection);
			document.removeEventListener("click", handleOutsideClick);
		};
	}, [popupVisible]);

	return (
		<div
			ref={floatingRef}
			className="cr-z-[999] cr-text-slate-800 dark:cr-text-white cr-fixed cr-w-72 cr-bg-slate-100 dark:cr-bg-slate-800 cr-rounded-lg cr-shadow-2xl cr-border-themed cr-border-solid cr-border-2"
			style={{ display: "none" }}
		>
			<div className="cr-bg-themed cr-justify-between cr-px-2 cr-flex cr-items-center">
				<div className="cr-text-white cr-flex cr-items-center cr-space-x-1">
					Currates
				</div>
				<div className="cr-flex cr-items-center">
					<button>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24"
							viewBox="0 -960 960 960"
							width="24"
							className="cr-fill-white hover:cr-fill-slate-200"
						>
							<path d="M480-120q-17 0-28.5-11.5T440-160v-160q0-17 11.5-28.5T480-360q17 0 28.5 11.5T520-320v40h280q17 0 28.5 11.5T840-240q0 17-11.5 28.5T800-200H520v40q0 17-11.5 28.5T480-120Zm-320-80q-17 0-28.5-11.5T120-240q0-17 11.5-28.5T160-280h160q17 0 28.5 11.5T360-240q0 17-11.5 28.5T320-200H160Zm160-160q-17 0-28.5-11.5T280-400v-40H160q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h120v-40q0-17 11.5-28.5T320-600q17 0 28.5 11.5T360-560v160q0 17-11.5 28.5T320-360Zm160-80q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520h320q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H480Zm160-160q-17 0-28.5-11.5T600-640v-160q0-17 11.5-28.5T640-840q17 0 28.5 11.5T680-800v40h120q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680H680v40q0 17-11.5 28.5T640-600Zm-480-80q-17 0-28.5-11.5T120-720q0-17 11.5-28.5T160-760h320q17 0 28.5 11.5T520-720q0 17-11.5 28.5T480-680H160Z" />
						</svg>
					</button>
					<button onClick={hidePopup}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24"
							viewBox="0 -960 960 960"
							width="24"
							className="cr-fill-white hover:cr-fill-slate-200"
						>
							<path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" />
						</svg>
					</button>
				</div>
			</div>
			<div className="cr-p-2">
				<div className="cr-flex cr-justify-between items-center mb-4">
					<span className="cr-text-md cr-text-slate-400">
						{`${getSymbol(rawCurrency)}${rawAmount}`}
					</span>
					<select
						className="cr-rounded-sm dark:cr-bg-slate-500 cr-px-1"
						onChange={handleCurrencyChange}
						value={priorQueue[0]}
					>
						{priorQueue.map((currency) => (
							<option key={currency} value={currency}>
								{currency}
							</option>
						))}
					</select>
				</div>
				<div
					className={`${
						convertRes[0]?.amount > 1000000000
							? "cr-text-2xl"
							: "cr-text-4xl"
					} cr-font-bold mb-2`}
				>
					{convertRes.length > 0
						? `${getSymbol(convertRes[0].currency)}${
								Math.floor(convertRes[0].amount * 100) / 100
						  }`
						: "---.--"}
				</div>

				{convertRes.length > 0 && itemValue.count > 0 && (
					<>
						<div className="cr-bg-slate-200 dark:cr-bg-slate-500 cr-w-full cr-my-2 cr-h-[2px]"></div>
						<div>
							{convertRes.slice(1).map((res) => (
								<div className="cr-flex cr-justify-between cr-px-1 cr-py-1">
									<div>{res.currency}</div>
									<div>{convertTo2Float(res.amount)}</div>
								</div>
							))}
						</div>
						<div className="cr-bg-slate-200 dark:cr-bg-slate-500 cr-w-full cr-my-2 cr-h-[2px]"></div>
						<ItemValue itemValue={itemValue} />
					</>
				)}
			</div>
		</div>
	);
}
