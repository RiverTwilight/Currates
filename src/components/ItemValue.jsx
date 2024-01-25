import { h, Component, Fragment } from "preact";
import PhoneIcon from "./icons/PhoneIcon";
import CoffeeIcon from "./icons/CoffeeIcon";
import EggIcon from "./icons/EggIcon";
import GoldenIcon from "./icons/GoldenIcon";

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
								egg: <EggIcon />,
								goldBar: <GoldenIcon />,
								iphone: <PhoneIcon />,
								paper: <CoffeeIcon />,
							}[itemValue.id])
					)}
			</div>
		</div>
	);
}
