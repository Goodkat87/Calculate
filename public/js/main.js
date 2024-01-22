let numbers = document.getElementById("numbers").querySelectorAll("button")
let buttons = document.querySelectorAll("button")
let result = document.getElementById("result")

let calcule = ""
let lastNumber = false
Array.from(buttons).forEach(element => {
    element.addEventListener("click",()=>{
        if (element.value === "=") {
            //the try instruction verify if there is an error in a code 
            try{
                //Function("return"+calcule)() is a function to calcule a string
                if (calcule == "") {
                    result.innerText = "0"
                }else{
                    result.innerText = Function("return " + calcule)()
                    calcule = result.innerText
                    lastNumber = true
                }
            }catch(error){
                result.innerText = "ERROR"
            }
            //condition if the user want to put an operator in first charctere
        }else if (calcule == "" && ["+", "*", "/","."].includes(element.value)) {
            return
            // conditon to clear the result 
        }else if (element.value === "C") {
            calcule = ""
            result.innerText = "0"
        //verify if the last input is an operator and disabled the buttons operator
        }else if (["+", "-", "*", "/","."].includes(calcule.slice(-1)) && ["+", "-", "*", "/","."].includes(element.value)) {
            return;
        }else if (lastNumber) {
            if (["+", "-", "*", "/"].includes(element.value)) {
                calcule += element.value    
                result.innerText = calcule
                lastNumber = false
            }else if(element.value == "."){
                calcule = "0."
                result.innerText=calcule
                lastNumber = false
            }else{
                calcule = ""
                calcule += element.value
                result.innerText = calcule
                lastNumber = false
            }
        }else{
            //add value of element in calcule variable
            calcule += element.value
            result.innerText = calcule
            console.log(calcule);
        }
    })
});
