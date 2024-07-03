function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

let firstNum;
let secondNum;
let operator;

function operate(firstNum, secondNum, operator) {
    let result;
    if (operator === "+") {
        result = add(firstNum, secondNum);
    } else if (operator === "-") {
        result = subtract(firstNum, secondNum);
    } else if (operator === "*") {
        result = multiply(firstNum, secondNum);
    } else if (operator === "/") {
        result = divide(firstNum, secondNum);
    };
    return result;
}