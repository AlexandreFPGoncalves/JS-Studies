// ===============================================================
// ================ Const, Let, Var and Hoisting =================
// ===============================================================

// Let variables are similar to the old var, their value can be altered,
// They cannot be re-declared, must be declared before use and have block scope.
let letNum1 = 25;

// Const variables cannot be re-assigned a new value,
// They cannot be re-declared and have block scope.
const ConstNum2 = 35;

console.log(letNum1 + ConstNum2); //60

// Variables defined with let and const are hoisted to the top of the block, but not initialized.
// In JavaScript, a variable can be declared after it has been used if it was declared using var.

varNum4 = 300;
console.log(varNum4); //300
var varNum4;

// num3 = 100;
// console.log(num3); //ERROR: ReferenceError: Cannot access 'num3' before initialization
// let num3;

// ===============================================================
// ==================== Template Strings =========================
// ===============================================================

// These are strings that allow embedded expressions
// To create them use `` and ${} to embed the expression.

const getFullName = (fName, lName) => {
  return `${fName} ${lName}`;
};
console.log(`Hello and Welcome ${getFullName('Alex', 'Gonçalves')}, enjoy your stay!`);

// ===============================================================
// ========================= Cycles ==============================
// ===============================================================
const getRandomRgbaValue = () => {
  let rgbaValues = [];
  for (let i = 0; i < 3; i++) {
    rgbaValues.push(Math.floor(Math.random() * 255));
  }
  rgbaValues.push(Math.round(Math.random() * 10) / 10);

  return rgbaValues;
};

console.log(`Random color Generated: rgba(${getRandomRgbaValue()})`);

// ===============================================================
// ===================== Arrow Function ==========================
// ===============================================================

// A change of syntax for clearing understanding of ES6

function fGreet(name) {
  console.log(`Welcome ${name}`);
}

const aGreet = (name) => console.log(`Welcome ${name}`);

fGreet('Pedro');
aGreet('Miguel');

// ===============================================================
// =============== Rest and Spread Operators =====================
// ===============================================================

// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array.
// Providing a way to represent variadic functions in JavaScript.

const sumRest = (...args) => {
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
};

console.log(sumRest(5, 10, 15));

// Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax.
// Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

const array = [1, 2, 3];
const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }

// ===============================================================
// ======================= Destructuring =========================
// ===============================================================

// It allows us to "unpack" arrays or objects into a bunch of variables which makes working with arrays and objects more convenient.

const clientName = 'Alexandre Filipe Gonçalves';
const clientNameArr = clientName.split(' ');

let [firstName, middleName, lastName] = clientNameArr;

console.log(`First name: ${firstName}, Middle name: ${middleName}, Last name: ${lastName}`);

// ===============================================================
// ============================ Map ==============================
// ===============================================================

// It iterates the array for us and we can pass a callback function to perform some operation on each index of the array.
// The updated values can be returned by the callback function to create a new array.
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const scoreboard = [250, 221, 110, 233, 3, 422];

const doubledScoreboard = scoreboard.map((score) => score * 2);
console.log(doubledScoreboard);

// ===============================================================
// ========================== Reduce =============================
// ===============================================================

// It iterates through the entire array and it accepts a callback function to perform an action on the array element.
// The difference from map is that reduce() passes the result of the callback from one iteration to the next one.
// This callback result is called accumulator. It can be pretty much anything, and must be instantiated and passed when calling reduce()

const balance = [5, 0.74, 10, 20, 5, 2, 0.5];

const totalBalance = balance.reduce((accumulator, currentValue) => (accumulator += currentValue), 0);
console.log(totalBalance);

// ===============================================================
// ========================== Filter =============================
// ===============================================================

// It iterates through the array to create a new one.
// You may decide which elements should be added to the new array based on stipulated conditions.

const todos = [
  { id: 1, copy: 'Clean Car', completed: false },
  { id: 2, copy: 'Feed Cats', completed: true },
  { id: 3, copy: 'Study ES6', completed: true },
];

const completedTodos = todos.filter((todo) => todo.completed);
console.log(completedTodos);

// ===============================================================
// ==================== Find and FindIndex =======================
// ===============================================================

// find() is used to search for an element in the array that matches some condition. It returns the first element that matches.
// findIndex() It is quite similar to find(), however, the difference is that findIndex() returns the index of the element instead of the element itself.

const students = [
  { name: 'Carlos', grade: 'C' },
  { name: 'Gina', grade: 'A+' },
  { name: 'Alex', grade: 'S' },
];

const findStudent = (student) => {
  const studentData = [];
  studentData.push(
    students.find(({ name }) => name === student),
    students.findIndex(({ name }) => name === student)
  );
  return studentData;
};

console.log(findStudent('Alex'));

// ===============================================================
// ========================== Classes ============================
// ===============================================================

// To create object factories, you can use the class keyword. Just like in Java per example.

class Cat {
  constructor(name, color, favSnack) {
    this.name = name;
    this.color = color;
    this.favSnack = favSnack;
  }

  getDetails = () => {
    return `Your Cat ${this.name}, which fur is ${this.color} loves when you get him some ${this.favSnack}`;
  };
}

let kuro = new Cat('Kuro', 'Black', 'Sardines');
console.log(kuro.getDetails());

// ===============================================================
// ======================= Inheritance ===========================
// ===============================================================

class Person {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
    this.currentYear = new Date().getFullYear();
  }

  getDetails = () => {
    return `Name: ${this.name} and Age: ${this.currentYear - this.birthYear}`;
  };
}

class Pilot extends Person {
  constructor(name, birthYeah, exp, type, license) {
    super(name, birthYeah);
    this.experience = exp;
    this.type = type;
    this.license = license;
  }

  getData = () => {
    console.log(`Experience ${this.experience} and Type: ${this.type}`);
  };
}

const john = new Pilot('John', 1980, 28, 'private', 'TAP192');

// ===============================================================
// ================== Callbacks and Promises =====================
// ===============================================================

// then() method is called when the resolve() is executed. It receives data passed in the resolve() as an arg.
// catch() method is called when the reject() method is executed. It receives data passed in the resolve() as an arg.

const loveMeLoveMeNotGenerator = () => {
  let promise = new Promise((resolve, reject) => {
    console.log('### Generating Love ###');
    const bool = Math.round(Math.random());

    //Wait time
    setTimeout(() => {
      if (bool === 1) {
        resolve('Love Me');
      } else {
        reject('Love Me Not');
      }
    }, 1000);
  });

  promise.then(
    function (value) {
      console.log(value);
    },
    function (error) {
      console.log(error);
    }
  );
};

loveMeLoveMeNotGenerator();
