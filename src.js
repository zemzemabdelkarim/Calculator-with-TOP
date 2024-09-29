const add = function (x, y) {
    return x + y;
};

const substract = function (x, y) {
    return x - y;
};

const multiply = function (x, y) {
    return x * y;
};

const divide = function (x, y) {
    return x / y;
};
const operate = function (x, op, y) {
    switch (op) {
        case "+":
            return add(x, y);

        case "-":
            return substract(x, y);

        case "x":
            return multiply(x, y);

        case "/":
            return divide(x, y);

        default:
            console.log("Error, unknowen operator");

            break;
    }
};

const numbers = document.querySelectorAll(".number");
numbers.forEach((button) => {
    button.addEventListener("click", (element) => {
        const currentNumber = document.querySelector("#currentNumber");
        currentNumber.textContent += element.target.id;
    });
});

const operators = document.querySelectorAll(".operator");
operators.forEach((op) => {
    op.addEventListener("click", (element) => {
        const operatorContainer = document.querySelector("#operatorContainer");
        operatorContainer.textContent = element.target.id;
        const prevNumber = document.querySelector("#prevNumber");
        const currentNumber = document.querySelector("#currentNumber");
        if (currentNumber.textContent != "") {
            prevNumber.textContent = currentNumber.textContent;
        }
        currentNumber.textContent = "";
    });
});

const clear = document.querySelector("#c");
clear.addEventListener("click", () => {
    const operatorContainer = document.querySelector("#operatorContainer");
    operatorContainer.textContent = "";
    const prevNumber = document.querySelector("#prevNumber");
    prevNumber.textContent = "";
    const currentNumber = document.querySelector("#currentNumber");
    currentNumber.textContent = "";
});

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    const operatorContainer = document.querySelector("#operatorContainer");
    const prevNumber = document.querySelector("#prevNumber");
    const currentNumber = document.querySelector("#currentNumber");
    let state = true;
    let firstNumber = parseFloat(prevNumber.textContent);
    let secondNumber = parseFloat(currentNumber.textContent);
    let operator = operatorContainer.textContent;

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        state = false;
    } else if (
        operator !== "+" &&
        operator !== "-" &&
        operator !== "x" &&
        operator !== "/"
    ) {
        state = false;
    }

    if (state) {
        prevNumber.textContent = `${firstNumber} ${operator} ${secondNumber}`;
        operatorContainer.textContent = "=";
        currentNumber.textContent = operate(
            firstNumber,
            operator,
            secondNumber
        );
    } else {
        const operatorContainer = document.querySelector("#operatorContainer");
        operatorContainer.textContent = "";
        const prevNumber = document.querySelector("#prevNumber");
        prevNumber.textContent = "";
        const currentNumber = document.querySelector("#currentNumber");
        currentNumber.textContent = "ERROR";
    }
});

const plusorminus = document.querySelector("#plusorminus");
plusorminus.addEventListener("click", ()=>{
    const currentNumber = document.querySelector("#currentNumber");
    currentNumber.textContent = "-"+currentNumber.textContent;
});

const persent = document.querySelector("#persent");
persent.addEventListener("click", ()=>{
    const operatorContainer = document.querySelector("#operatorContainer");
    const prevNumber = document.querySelector("#prevNumber");
    const currentNumber = document.querySelector("#currentNumber");

    operatorContainer.textContent = "%";
    let number = parseFloat(currentNumber.textContent);
    if(isNaN(number)){
        prevNumber.textContent = "";
        currentNumber.textContent = "ERROR";
    }else{
        prevNumber.textContent = `${number}`;
        currentNumber.textContent = `${number / 100}%`;
    }
});