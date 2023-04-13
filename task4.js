let sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

let seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 538, 616, 693, 770];

// Using the .every() method, check that every number in the sevenTimesTable array is a multiple of 7.
function isMultipleOf7(arr) {
	return arr.every(number => number % 7 === 0);
}
console.log(isMultipleOf7(sevenTimesTable));

//Check if every number in the seventySevenTimesTable array is a multiple of 77 using the .every() method.
function isMultipleOf77(arr) {
	return arr.every(number => number % 77 === 0);
}
console.log(isMultipleOf77(seventySevenTimesTable));

//Your worst fears have been confirmed. The result of step 4b showed you that there is a rogue value in your seventySevenTimesTable array. Use the .find() method to identify which number it is.
function isNotMultipleOf77(arr) {
	return arr.find(number => number % 77 !== 0);
}
console.log(isNotMultipleOf77(seventySevenTimesTable)); // 461

// Now that you know which number is incorrect, use the .findIndex() method to identify the index of the number.
console.log(seventySevenTimesTable.findIndex(number => number % 77 !== 0)); // 5
