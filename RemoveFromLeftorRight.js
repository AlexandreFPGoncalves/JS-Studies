const removeFromLeft = (arr, x = 1) => {
  return arr.slice(x);
}

const removeFromRight = (arr, y = -1) => {
  return arr.slice(y);
}

console.log(removeFromLeft([4,3,2,1],3));
console.log(removeFromRight([4,3,2,1],-3));