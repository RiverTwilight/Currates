const ITEM_VALUE = [
	{
		name: "Eggs",
		value: 3,
	},
	{
		name: "Apple",
		value: 2,
	},
	{
		name: "Paper",
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
				count: amount / item.value,
			};
			break;
		}
	}

	return res;
}

export default estimateValue;
