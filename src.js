function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

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

        case "*":
            return multiply(x, y);

        case "/":
            return divide(x, y);

        default:
            console.log("Error, unknowen operator");

            break;
    }
};
const operatorIndex = function (str) {
    for (let i = 0; i < str.length; i++) {
        if (
            str[i] === "*" ||
            str[i] === "/" ||
            str[i] === "+" ||
            str[i] === "-"
        ) {
            return i;
        }
    }
    return -1;
};
const equalIndex = function (str) {
    return str.indexOf("=");
};
const clearResult = function () {
    const result = document.querySelector(".result");
    result.textContent = "";
};

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e.target.id);
        const result = document.querySelector(".result");
        result.textContent += e.target.id;
        if (e.target.id === "=") {
            //console.log(result.textContent);

            //console.log("index is ", operatorIndex(result.textContent));
            let indexOfOperator = operatorIndex(result.textContent);
            let indexOfEqual = equalIndex(result.textContent);
            if (indexOfEqual != result.textContent.length - 1) {
                result.textContent = "ERROR";
                wait(1000);
                clearResult();
            }

            let firstNumber = parseInt(
                result.textContent.substring(0, indexOfOperator)
            );
            //console.log("first number is ", firstNumber);
            let secondNumber = parseInt(
                result.textContent.substring(indexOfOperator, indexOfEqual)
            );
            //console.log("second number is ", secondNumber);
            /*console.log(
                operate(
                    parseInt(firstNumber),
                    result.textContent[operatorIndex(result.textContent)],
                    parseInt(secondNumber)
                )
            );*/
            console.log(`scondNumber = ${secondNumber}`);

            if ( isNaN( firstNumber ) || isNaN( secondNumber )) {
                result.textContent = "ERROR";
                wait(1000);
                clearResult();
            } else {
                result.textContent += operate(
                    firstNumber,
                    result.textContent[operatorIndex(result.textContent)],
                    secondNumber
                );
            }
        }

        if (e.target.id === "c") {
            clearResult();
        }
    });
});

let firstNumber;
let operator;
let secondNumber;
