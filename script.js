addEventListener("DOMContentLoaded", (event) => {
    let firstNum = "";
    let secondNum = "";
    let operator;
    let display = document.querySelector("#display");
    let displayText = "";
    let numbers = ["1","2","3","4","5","6","7","8","9","0"];
    let operators = ["+", "-", "×", "÷"];
    let operatorClicked = false;
    let equalClicked = false;
    let result;
    
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (numbers.includes(button.textContent)) {
                if (operatorClicked) {
                    secondNum += button.textContent;
                    displayText += button.textContent;
                    display.textContent = displayText;
                } else if (!equalClicked) {
                    firstNum += button.textContent;
                    displayText += button.textContent;
                    display.textContent = displayText;
                }
            } else if (operators.includes(button.textContent)) {
                if (!operatorClicked && display.textContent != "") {
                    operator = button.textContent;
                    operatorClicked = true;
                    displayText += button.textContent;
                    display.textContent = displayText;
                }
            } else if (button.textContent === "=") {
                equalClicked = true;
                operatorClicked = false;
                if (secondNum === "") {
                    result = firstNum;
                    displayText = result;
                    display.textContent = displayText;
                } else if (firstNum != "" && secondNum != "") {
                    result = operate(firstNum, secondNum, operator);
                    displayText = result;
                    firstNum = result;
                    display.textContent = result;
                    secondNum = "";
                }    
            } else if (button.id === "clear") {
                operatorClicked = false;
                equalClicked = false;
                displayText = "";
                display.textContent = displayText;
                firstNum = "";
                secondNum = "";
                operator = undefined;
            }
        })
    })    
})

function add(a,b) {
    return Number(a) + Number(b);
}

function subtract(a,b) {
    return Number(a) - Number(b);
}

function multiply(a,b) {
    return Number(a) * Number(b);
}

function divide(a,b) {
    return Number(a) / Number(b);
}

function operate(firstNum, secondNum, operator) {
    let result;
    if (operator === "+") {
        result = add(firstNum, secondNum);
    } else if (operator === "-") {
        result = subtract(firstNum, secondNum);
    } else if (operator === "×") {
        result = multiply(firstNum, secondNum);
    } else if (operator === "÷") {
        result = divide(firstNum, secondNum);
    }
    return result;
}
