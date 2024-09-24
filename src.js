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


let firstNumber;
let operator;
let secondNumber;