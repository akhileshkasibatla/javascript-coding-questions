const fruits = [{
		'name': 'apple',
		color: 'red'
	}, {
		'name': 'lemon',
		'color': 'yellow'
	},
	{
		'name': 'strawberries',
		'color': 'red'
	}, {
		'name': 'mango',
		'color': 'orange'
	},
	{
		'name': 'cherries',
		'color': 'red'
	}, {
		'name': 'kiwis',
		'color': 'green'
	},
	{
		'name': 'grapes',
		'color': 'green'
	}, {
		'name': 'blueberries',
		'color': 'blue'
	},
	{
		'name': 'guava',
		'color': 'green'
	}, {
		'name': 'tangerine',
		'color': 'orange'
	}
];
const colors = [...new Set(fruits.map(fruit => fruit.color))];
const colorFruits = {};

colors.forEach(color => {
	colorFruits[color] = {
		color,
		fruits: []
	};
});

fruits.map(fruit => {
	const color = fruit.color;
	const colorFruit = colorFruits[color];
	colorFruits[color].fruits.push(fruit.name);
});

console.log(Object.values(colorFruits));
