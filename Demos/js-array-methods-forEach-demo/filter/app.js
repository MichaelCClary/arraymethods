const words = [
	'immunoelectrophoretically',
	'rotavator',
	'tsktsk',
	'psychophysicotherapeutics',
	'squirrelled',
	'crypt',
	'uncopyrightable',
	'cysts',
	'pseudopseudohypoparathyroidism',
	'unimaginatively'
];

const longwords = words.filter(function (word) {
	return word.length >= 20;
});

const cOrUWords = words.filter(function (w) {
	return w[0] === 'u' || w[0] === 'c';
});


const containsVowel = function (word) {
	for (let char of word) {
		if (isVowel(char)) return true;
	}
	return false;
}


const isVowel = function (char) {
	return 'aeiou'.indexOf(char) != -1;
}

const containVowels = words.filter(containsVowel);
const noVowels = words.filter(function (word) {
	return !containsVowel(word);
});

const allCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

const checked = allCheckboxes.filter(function (box) {
	return box.checked;
});

const completedItems = checked.map(function (checkbox) {
	return checkbox.parentElement.innerText;
});

const completeTodos = function extractCompletedTodos() {
	const allCheckboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

	return (allCheckboxes.filter(function (box) {
		return box.checked;
	}).map(function (checkbox) {
		return checkbox.parentElement.innerText;
	}));
};


function myFilter(arr, func) {
	const filtered = [];
	for (let i = 0; i < arr.length; i++) {
		if (func(arr[i], i, arr)) {
			filtered.push(arr[i]);
		};
	};
	return filtered;
};

myFilter(words, containsVowel);

const everOtherWord = myFilter(words, function (word, i) {
	return i % 2 === 0;
})