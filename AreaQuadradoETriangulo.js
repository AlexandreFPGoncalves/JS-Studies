//3 promps lado do triangulo e calculado

const calcAreaT = (base,lado1,lado2) => {
    if(lado1 === lado2){
      let altura = Math.sqrt(Math.pow(lado1,2)-Math.pow(base/2,2));
      return (base*altura)/2 +"cm2"
    }else return "So Aceitamos Triangulos Isósceles"
    
  }
  
  const calcAreaQ = (x) => "A área do Quadrado é: " + Math.pow(x,2);
  
  console.log(calcAreaT(12,10,10));
  console.log(calcAreaQ(10));