const getFahrenheit = (x) => x+"°C = " + (x*(9/5)+32)+"°F";
const getCelsius = (x) => x+"°F = " + (x-32) * 5/9 +"°C";

console.log(getFahrenheit(20));
console.log(getCelsius(68));
