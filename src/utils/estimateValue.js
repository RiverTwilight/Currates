const ITEM_VALUE = [
	{
		name: "iPhone 15",
		id: "iphone",
		value: 5999,
	},
	{
		id: "egg",
		name: "Egg(s)",
		value: 3,
	},
	{
		id: "apple",
		name: "Apple(s)",
		value: 2,
	},
	{
		id: "paper",
		name: "Papers",
		value: 0.1,
	},
];

function estimateValue(amount) {
	let res = {};

	for (let i = 0; i < ITEM_VALUE.length; i++) {
		let item = ITEM_VALUE[i];
		if (item.value < amount) {
			res = {
				name: item.name,
				count: Math.floor(amount / item.value),
                id: item.id
			};
			break;
		}
	}

	return res;
}

export default estimateValue;
