//1
const random_hex = () => { //Creates arrow function with no parameters
  let randomColor = (Math.random() * 0xfffff * 1000000).toString(16); 
  return "#" + randomColor.slice(0,6);
}

//2
var randomColor = Math.floor(Math.random()*16777215).toString(16);

//3
const random = () => {
  return "#"+Math.floor(Math.random() * 10000000).toString(15);
}



console.log(random_hex());
console.log(randomColor);
console.log(random());