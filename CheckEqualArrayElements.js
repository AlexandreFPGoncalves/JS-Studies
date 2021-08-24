const checkArray = arr => arr.every(val => val === arr[0]);
 
console.log(checkArray([1, 2, 3, 4, 5, 6]));
console.log(checkArray([12, 12, 12, 12]));