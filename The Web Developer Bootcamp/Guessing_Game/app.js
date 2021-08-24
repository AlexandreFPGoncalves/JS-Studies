//Guardar o Valor que o utilizador escolheu...
let maximum = parseInt(prompt("Enter the Maxiumum Number!"));

//Verificar se o Numero é existe e é valido...
while(!maximum){
    maximum = parseInt(prompt("Enter a Valid Number..."));
}
//Gerar um numero random a partir do numero que o utilizador escolheu...
const targetNum = Math.floor(Math.random() * maximum) +1;
//console.log(targetNum);



let guess = parseInt(prompt("Enter your first Guess!"));
let numGuesses = 1;

while(parseInt(guess) !== targetNum){
    if(guess === 'q') break;
    numGuesses ++;
    if(guess > targetNum){
        guess = prompt("Number is too high! Guess Again...");
    }else{
        guess = prompt("Number is too low! Guess Again...");
    }

}
if(guess === 'q'){
    window.confirm("The numer was " + targetNum + " Better Luck next time...");
    console.log("Target Number: " + targetNum);
    console.log("Number of Guesses: " + numGuesses);
}else{
    window.confirm("The numer was " + targetNum + " Congratulations! you guessed it in: " + numGuesses + " attempts");
    console.log("Target Number: " + targetNum);
    console.log("Number of Guesses: " + numGuesses);
}

