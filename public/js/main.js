let numbers = document.getElementById("numbers").querySelectorAll("button")
let buttons = document.querySelectorAll("button")
let result = document.getElementById("result")

let calcule = ""

Array.from(buttons).forEach(element => {
    element.addEventListener("click",()=>{
        if (element.value === "=") {
            result.innerText = eval(calcule)
            calcule = ""
        }else{
            result.innerText = element.value
            calcule += element.value
            console.log(calcule);
        }

    })
});
