const numbers = [21, 37, 64, 99, 142];

const negatives = numbers.map(function (num) {
	return num * -1;
});

const doubles = numbers.map(function (num) {
	return num * 2;
});


const todos = [
	{
		id: 1,
		text: 'walk the dog',
		priorty: 'high'
	},
	{
		id: 2,
		text: 'walk the chicks',
		priorty: 'medium'
	},
	{
		id: 3,
		text: 'feed that cat',
		priorty: 'low'
	},
	{
		id: 4,
		text: 'Put out the fire',
		priorty: 'very high'
	},
];

const todoText = todos.map(function (todo) {
	return todo.text;
});


const anchors = Array.from(document.querySelectorAll('a'));

const urls = anchors.map(function (a) {
	return a.href;
});

const doubled = function (num) {
	return num + num;
}


function myMap(arr, func) {
	let tempArr = []
	for (let i = 0; i < arr.length; i++) {
		tempArr.push(func(arr[i], i, arr));
	}
	return tempArr;
}

let mapped = myMap(numbers, doubled)

let mappedTodos = myMap(todos, function (todo) {
	return todo.priorty;
})

const repeatedStrings = myMap(['a', 'b', 'c', 'd', 'e'], function (str, idx) {
	return str.repeat(idx);
})