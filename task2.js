let animals = [
	'baboon',
	'kangaroo',
	'rhino',
	'frog',
	'beaver',
	'horse',
	'basalisk',
];
//In the new variable bListAnimals, use the .filter() method to generate a new array which contains only the animals whose name begins with 'b'.
let bListAnimals = animals.filter(animal => animal[0] === 'b');
console.log(bListAnimals);
