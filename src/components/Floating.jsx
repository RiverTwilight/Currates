import { h, Component } from "preact";
import { useEffect, useState, useRef } from "preact/hooks";
import { extractAmount, convertTo2Float, getSymbol } from "../utils/helpers";
import estimateValue from "../utils/estimateValue";
import PhoneIcon from "./icons/PhoneIcon";
import CoffeeIcon from "./icons/CoffeeIcon";
import { useMemo } from "react";

export default function Floating() {
	const floatingRef = useRef(null);
	const [popupVisible, setPopupVisible] = useState(false);
	const [convertRes, setConvertRes] = useState([]);
	const [rawAmount, setRawAmount] = useState("$---");

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

	const itemValue = useMemo(
		() =>
			convertRes.length > 0 ? estimateValue(convertRes[0].amount) : null,
		[convertRes]
	);

	useEffect(() => {
		const handleTextSelection = async (e) => {
			let selectedText = window.getSelection().toString();
			if (selectedText && e.target.id !== "cr_container") {
				const extractedAmount = extractAmount(selectedText);
				updatePopupPosition(e.clientX, e.clientY);

				if (rawAmount) {
					setRawAmount(
						`${getSymbol(extractedAmount.currency)}${
							extractedAmount.amount
						}`
					);

					const res = await chrome.runtime.sendMessage({
						type: "convert",
						amount: extractedAmount.amount,
						currency: extractedAmount.currency,
					});

					setConvertRes(res["data"]);
				}
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
			id="cr_inner"
			className="cr-z-[999] cr-text-slate-800 dark:cr-text-white cr-fixed cr-min-w-56 cr-max-w-sm cr-bg-slate-100 dark:cr-bg-slate-800 cr-rounded-lg cr-shadow-2xl cr-border-themed cr-border-solid cr-border-2"
			style={{ display: "none" }}
		>
			<div className="cr-bg-themed cr-px-1 cr-justify-between p-4 cr-flex justify-between cr-items-center w-full h-12">
				<div className="cr-text-white cr-flex cr-items-center cr-space-x-1">
					Current
				</div>
				<button onClick={hidePopup} className="p-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24"
						viewBox="0 -960 960 960"
						width="24"
						className="cr-fill-white"
					>
						<path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z" />
					</svg>
				</button>
			</div>
			<div className="cr-p-2">
				<div className="cr-flex cr-justify-between items-center mb-4">
					<span className="cr-text-md cr-text-slate-400">
						{rawAmount}
					</span>
					<select className="cr-rounded-sm dark:cr-bg-slate-500">
						<option>CNY</option>
					</select>
				</div>
				<div className="cr-text-4xl cr-font-bold mb-2">
					{convertRes.length > 0
						? `${getSymbol(convertRes[0].currency)}${
								Math.floor(convertRes[0].amount * 100) / 100
						  }`
						: "---.--"}
				</div>
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
				{itemValue && (
					<div className="mt-2">
						<div className="cr-text-sm cr-text-center cr-text-slate-500 dark:cr-text-gray-500">
							Approximately equals to
							<span className="cr-text-themed">{` ${itemValue.count} ${itemValue.name}`}</span>
						</div>
						<div className="cr-flex cr-py-2 cr-justify-center">
							{Array(Math.min(itemValue.count, 10))
								.fill(0)
								.map(
									(_) =>
										({
											egg: <CoffeeIcon />,
											coffee: <CoffeeIcon />,
											iphone: <PhoneIcon />,
											paper: <CoffeeIcon />,
										}[itemValue.id])
								)}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
