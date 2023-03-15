/* 

  Write code to print list of colors and their fruits 
  
  [
    { color: 'red', fruits: [ 'apple', 'strawberries', 'cherries' ] },
    { color: 'yellow', fruits: [ 'lemon' ] },
    { color: 'orange', fruits: [ 'mango', 'tangerine' ] },
    { color: 'green', fruits: [ 'kiwis', 'grapes', 'guava' ] },
    { color: 'blue', fruits: [ 'blueberries' ] }
  ] 


*/

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
const colorFruits = {};

fruits.map(({ color }) => {
	if (!colorFruits.hasOwnProperty(color)) {
		colorFruits[color] = {
			color,
			fruits: [],
		};
	}
});

fruits.map(({ color, name }) => {
	colorFruits[color].fruits.push(name);
});

console.log(Object.values(colorFruits));
