const colors = ['teal', 'cyan', 'peach', 'black'];

function yell(val, i) {
	const caps = val.toUpperCase();
	console.log(`At index ${i}, ${caps}`);
}

colors.forEach(yell);

const prices = [30.99, 19.99, 2.5, 99.0];
let total = 0;

prices.forEach(function (price) {
	total += price;
});

console.log(total);

total = 0;
for (let price of prices) {
	total += price;
}

console.log(total);


let doubler = function (num) {
	return num + num;
}

function myForEach(arr, func) {
	for (let a of arr) {
		console.log(func(a));
	}
	//implicitly returns undefined
};


myForEach([1, 2, 3], doubler);


function forEach(arr, callback) {
	for (let i = 0; i < arr.length; i++) {
		callback(arr[i], i, arr);
	}
}

forEach(colors, function (color, i, arr) {
	console.log(color.toUpperCase(), 'at index of:', i, 'in array of', arr);
});