const btns = document.querySelectorAll("button");

for(let button of btns){
    console.log("clicked");
    button.addEventListener("click", colorize);
}





function colorize(){
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}

const randomColor = ()  => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}