const input = document.querySelector("input");
const h1 = document.querySelector("h1");

input.addEventListener("input", function(e){
    h1.innerText = `Welcome, ${input.value}`;

    const value = input.value.trim()
    if (!value) {
        h1.innerText = "Enter Your Username";
    }
})
