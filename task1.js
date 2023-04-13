const cats = ['tony', 'daisy', 'socks', 'rockie'];
// Write a function that takes in a string and turns it to upper case
const upperCaseString = string => string.toUpperCase();
//Use the .map() method to generate a new array by calling your function on each item in cats. Store the returned value from map in the variable capitalisedCats,
const capitalisedCats = cats.map(function (cat) {
	return upperCaseString(cat);
});
console.log(capitalisedCats);
