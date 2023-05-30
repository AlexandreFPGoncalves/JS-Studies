/*  Challenge 1:
    This JavaScript function calculates the difference between a given number and 25. 
    If the number is greater than 25, it returns double the difference. Otherwise, it returns the difference itself. */

const Challenge1 = (num) => {
	if (num <= 25) {
		return 25 - num;
	} else {
		return (num - 25) * 2;
	}
};

/*  Challenge 2:
    This JavaScript function takes in a string and a character as arguments. 
    It counts and returns the number of times the character appears in the string. */

function Challenge2(string, letter) {
	let count = 0;
	for (let i = 0; i < string.length; i++) {
		if (letter === string[i]) {
			count++;
		}
	}

	return count;
}

/*  Challenge 3:
    This JavaScript function accepts an array of numbers as an argument and sorts the array in ascending order
    from the smallest to the highest number. */

const Challenge3 = (arr) => {
	let arrCopy = [...arr];

	return arrCopy.sort(function (a, b) {
		return a - b;
	});
};

/*  Challenge 4:
    This JavaScript function takes a number as an argument and calculates 
    the sum of all natural numbers from 0 up to the given number, inclusive. */

const Challenge4 = (num) => {
	let total = 0;

	for (num; num >= 0; num--) {
		total += num;
	}
	return total;
};

/*  Challenge 5:
    This JavaScript function filters an array of food items based on their origin and multiplies their price by 3.
    It then returns the filtered array with the updated prices. */

const getTaxedFoods = (foodsArr, foodOrigin) => {
	let arrCopy = [...foodsArr];

	return arrCopy
		.filter((food) => food.origin === foodOrigin)
		.map((filteredFood) => ({
			...filteredFood,
			price: filteredFood.price * 3,
		}));
};

const foodsArr = [
	{
		origin: 'America',
		food: 'Cheeseburger',
		price: 4.99,
	},
	{
		origin: 'Portugal',
		food: 'Francesinha',
		price: 9.99,
	},
	{
		origin: 'America',
		food: 'Chocolate chip cookie',
		price: 2.78,
	},
	{
		origin: 'Portugal',
		food: 'Bacalhau',
		price: 14.99,
	},
	{
		origin: 'Japan',
		food: 'Sushi',
		price: 40,
	},
	{
		origin: 'America',
		food: 'Corn dogs',
		price: 3.99,
	},
];

console.log('My Taxed Food List:', getTaxedFoods(foodsArr, 'America'));

/*  Challenge 6:
    This JavaScript function filters an array of todos based on their completion status.
    It returns an array containing only the todos that match the provided completion status.*/

const getTodoList = (todosArr, isCompleted) => {
	let arrCopy = [...todosArr];

	return arrCopy.filter((todo) => todo.completed === isCompleted);
};

const todosArr = [
	{
		id: 1,
		copy: 'Study JavaScript',
		completed: false,
	},
	{
		id: 2,
		copy: 'Feed Cats',
		completed: true,
	},
	{
		id: 3,
		copy: 'Take out Trash',
		completed: false,
	},
	{
		id: 4,
		copy: 'Clean room',
		completed: true,
	},
	{
		id: 5,
		copy: 'Make lunch for the week',
		completed: false,
	},
	{
		id: 6,
		copy: 'Publish Code to Github',
		completed: true,
	},
];

console.log('My Todo List:', getTodoList(todosArr, true));

/*  Challenge 7:
    This JavaScript function filters an array of cats based on their name and returns a string containing
    information about the first cat that matches the provided name. */

const catsArr = [
	{
		name: 'Kuro',
		fur: 'black',
		age: 5,
		personality: 'noble',
	},
	{
		name: 'Shiro',
		fur: 'White',
		age: 1,
		personality: 'scaredy',
	},
	{
		name: 'Shimi',
		fur: 'Calico',
		age: 1,
		personality: 'playful',
	},
];

const filterCatsByName = (catsArr, nameToFilter) => {
	let copyArr = [...catsArr];
	const [filteredCat] = copyArr.filter((cat) => cat.name === nameToFilter);

	return `The first cat in the system who's name is ${filteredCat.name} is a ${filteredCat.fur} kitty around ${filteredCat.age} years old he has a ${filteredCat.personality} personality!`;
};

console.log(filterCatsByName(catsArr, 'Kuro'));

/*  Challenge 8:
    This JavaScript function takes two numbers as arguments
    returns true if either of the numbers is equal to 100 or if their sum is equal to 100.*/

const checkIf100 = (num1, num2) => {
	return num1 === 100 || num2 === 100 || num1 + num2 === 100 ? true : false;
};

console.log(checkIf100(50, 1));

/*  Challenge 9:
    This JavaScript function simulates rolling different dice based on the provided dice types and prints the results.*/

const dices = [
	{
		diceType: 'D12',
		diceFaces: 12,
	},
	{
		diceType: 'D20',
		diceFaces: 20,
	},
	{
		diceType: 'D6',
		diceFaces: 6,
	},
];

const rollDice = (dices) => {
	for (let i = 0; i < dices.length; i++) {
		let diceRoll = Math.floor(Math.random() * dices[i].diceFaces + 1);
		console.log(`Your ${dices[i].diceType} just rolled a ${diceRoll}`);
	}
};

rollDice(dices);

/*  Challenge 10:
    This JavaScript function takes a number as an argument
    returns true if the number represents a legal age (18 or above), and false otherwise. */

const checkLegalAge = (age) => {
	return age >= 18;
};

/*  Challenge 11:
    This JavaScript function takes a string and a character as arguments 
    returns true if the last character of the string is the same as the provided character.*/

const checkLastCharacter = (string, char) => {
	const lastStringChar = string.charAt(string.length - 1);
	return lastStringChar === char;
};

console.log(checkLastCharacter('This example uses the slice() function to get the last character of the string', 'a'));

/*  Challenge 12:
    This JavaScript function checks the type of the argument
    returns "integer" if it's a number, "string" if it's a string, "boolean" if it's a boolean, 
    returns "Not a number, string, or boolean" if it doesn't match any of the expected types.*/

const stringOrInteger = (value) => {
	return typeof value === 'number'
		? 'integer'
		: typeof value === 'string'
		? 'string'
		: typeof value === 'boolean'
		? 'boolean'
		: 'Not a number, string or boolean';
};

console.log(`Your type is: ${stringOrInteger('true')}`);

/*  Challenge 13:
    This JavaScript function replicates the behavior of the startsWith() method.
    It checks whether a string starts with the characters of a specified string and returns true or false accordingly.*/

const stringStartsWith = (string, validator) => {
	return string.slice(0, validator.length) === validator;
};

console.log(stringStartsWith('Javascript', 'test'));
