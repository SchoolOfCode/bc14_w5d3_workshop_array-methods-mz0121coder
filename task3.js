let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

let hasMultipleOf3 = someNumbers.some(number => number % 3 === 0);
let hasMultipleOf5 = someNumbers.some(number => number % 5 === 0);
let hasMultipleOf60 = someNumbers.some(number => number % 60 === 0);
let hasMultipleOf90 = someNumbers.some(number => number % 90 === 0);

console.log({
	hasMultipleOf3,
	hasMultipleOf5,
	hasMultipleOf60,
	hasMultipleOf90,
});
