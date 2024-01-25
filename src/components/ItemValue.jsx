import { h, Component, Fragment } from "preact";
import estimateValue from "../utils/estimateValue";
import PhoneIcon from "./icons/PhoneIcon";
import CoffeeIcon from "./icons/CoffeeIcon";
import { useMemo } from "react";

export default function ItemValue({ itemValue }) {
	return (
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
	);
}
