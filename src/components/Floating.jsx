import { h, Component } from "preact";
import { useEffect, useState, useRef } from "preact/hooks";
import { extractAmount } from "../utils/helpers";

export default function Floating() {
	const floatingRef = useRef(null);
	const [popupVisible, setPopupVisible] = useState(false);
	const [amoutRes, setAmoutRes] = useState(999.99);

	// Function to create/update popup position
	const updatePopupPosition = (x, y) => {
		if (floatingRef.current) {
			floatingRef.current.style.left = `${x}px`;
			floatingRef.current.style.top = `${y}px`;
			floatingRef.current.style.display = "block";
			setPopupVisible(true);
		}
	};

	// Function to hide the popup
	const hidePopup = () => {
		if (floatingRef.current) {
			floatingRef.current.style.display = "none";
			setPopupVisible(false);
		}
	};

	useEffect(() => {
		// Event listener for text selection
		const handleTextSelection = async (e) => {
			let selectedText = window.getSelection().toString();
			if (selectedText) {
				const extractedAmount = extractAmount(selectedText);
				updatePopupPosition(e.clientX, e.clientY);
				if (extractedAmount) {
					const res = await chrome.runtime.sendMessage({
						type: "convert",
						amount: extractedAmount.amount,
						currency: extractedAmount.currency,
					});
					setAmoutRes(res.convertedAmount);
				}
			}
		};

		// Event listener for outside click
		const handleOutsideClick = (e) => {
			// Delay handling to ensure it doesn't conflict with the text selection
			setTimeout(() => {
				if (
					popupVisible &&
					floatingRef.current &&
					!floatingRef.current.contains(e.target)
				) {
					hidePopup();
				}
			}, 200);
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
			className="cr-fixed cr-max-w-xs cr-bg-white dark:bg-gray-800 rounded-lg shadow-2xl border-yellow-600 border-solid border-2"
			style={{ display: "none" }}
		>
			<div className="cr-p-2">
				<div className="cr-flex cr-justify-between items-center mb-4">
					<span className="text-md text-slate-500">$396</span>
				</div>
				<div className="text-4xl font-bold text-slate-800 mb-2">
					¥{Math.floor(amoutRes * 100) / 100}
				</div>
				<div className="text-sm text-gray-500 mb-4">
					Approximately equals to 100 cups of coffee
				</div>
				<div></div>
			</div>

			<div className="cr-bg-yellow-700 p-4 flex justify-between items-center w-full h-12">
				<div className="flex space-x-1"></div>
				<div className="flex items-center"></div>
			</div>
			<br />
		</div>
	);
}
