const btn = document.querySelector("#colorbutton");
const h1 = document.querySelector("#colorh1");



btn.addEventListener("click",function(){
    newColor = randomColor()[0];
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    if(randomColor()[1] <= 70){
        console.log(randomColor()[1])
        h1.style.color = "white";
    }else(h1.style.color = "black");
})

const randomColor = ()  => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const totalRGB = r+g+b;

    return [`rgb(${r},${g},${b})`,totalRGB];
}

