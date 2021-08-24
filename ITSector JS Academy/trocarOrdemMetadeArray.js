const switchArr = arr => {
  if(((arr.length)%2)!=0){
    return false;
  }
  
  for(let i = 0; i < arr.length/2; i++){
    let tmp = arr[i];                       //tmp = arr[0] = 1
    arr[i] = arr[i + arr.length/2];         //arr[0] = 4
    arr[i + arr.length/2] = tmp;            //arr[3] = 1 
  }
  
  return arr;
  
}

console.log(switchArr([1,2,3,4,5,6]))   //[4,5,6,1,2,3]
console.log(switchArr([1,2,3,4,5,6,7])) //False
