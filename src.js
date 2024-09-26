const add = function(x, y){
    return x + y;
}

const substract = function(x, y){
    return x - y;
}

const multiply = function(x, y){
    return x * y;
}

const divide = function(x, y){
    return x / y;
}
const operate = function(x, op, y){
    switch (op) {
        case "+":
            return add(x, y);
    
        case "-":
            return substract(x, y);

        case "*":
            return multiply(x, y);

        case "/":
            return divide(x, y);

        default:
            console.log("Error, unknowen operator");
            
            break;
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        console.log(e.target.id);
        const result = document.querySelector(".result");
        result.textContent += e.target.id;
        if(e.target.id === "="){
            console.log(result.textContent);
            
        }
    });
});


let firstNumber;
let operator;
let secondNumber;