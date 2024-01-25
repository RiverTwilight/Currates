import { h } from "preact";
import { useDrag, useDrop } from "preact-dnd";

const CurrencyItem = ({ currency, index, moveCurrency }) => {
	const [, drag] = useDrag({
		item: { type: "currency", index },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	const [, drop] = useDrop({
		accept: "currency",
		hover(item) {
			if (item.index !== index) {
				moveCurrency(item.index, index);
				item.index = index;
			}
		},
	});

	return (
		<li ref={(node) => drag(drop(node))} className="cr-list-item">
			{currency}
		</li>
	);
};

const CurrencyList = ({ currencies, moveCurrency }) => {
	return (
		<ul className="cr-list">
			{currencies.map((currency, index) => (
				<CurrencyItem
					key={currency}
					currency={currency}
					index={index}
					moveCurrency={moveCurrency}
				/>
			))}
		</ul>
	);
};

export default CurrencyList;
