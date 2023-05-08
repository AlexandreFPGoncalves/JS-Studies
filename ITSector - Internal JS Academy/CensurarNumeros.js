const blur = (n, qt = 4, mask = '*') =>
 //3 valores, o numero a ser alterado, a quantidade de numeros que queres que sejam 
 //vistos e o tipo de character de block
  ("" + n).slice(0, -qt).replace(/./g, mask) + ("" + n).slice(-qt);
  
console.log(blur(6011277933437061,3));
//output : **************061


//calcular a length  -qt