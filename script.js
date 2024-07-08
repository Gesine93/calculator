addEventListener("DOMContentLoaded", (event) => {
    let firstNum = "";
    let secondNum = "";
    let operator;
    let display = document.querySelector("#display");
    let displayText = "";
    let numbers = ["1","2","3","4","5","6","7","8","9","0"];
    let operators = ["+", "−", "×", "÷"];
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
            } else if (operatorClicked && button.textContent === "." && !secondNum.includes(".")) {
                secondNum += button.textContent;
                displayText += button.textContent;
                display.textContent = displayText;
            } else if (!equalClicked && button.textContent === "." && !firstNum.includes(".")) {
                firstNum += button.textContent;
                displayText += button.textContent;
                display.textContent = displayText;
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
            } else if (button.id==="remove") {
                last = display.textContent.slice(-1);
                if (operatorClicked) {
                    if operators.includes(last) {
                        operatorClicked = false;
                        display.textContent = display.textContent.slice(0,-1);
                    } else if (!secondNum === "") {
                        secondNum = secondNum.splice(0,-1);
                        display.textContent = display.textContent.slice(0,-1);
                    } else if (!firstNum === "") {
                        firstNum = firstNum.splice(0,-1);
                        display.textContent = display.textContent.slice(0,-1);
                    }
                }
            }
        })
    })    
})

function add(a,b) {
    num = Number(a) + Number(b);
    return roundToThree(num);
}

function subtract(a,b) {
    num = Number(a) - Number(b);
    return roundToThree(num);

}

function multiply(a,b) {
    num = Number(a) * Number(b);
    return roundToThree(num);
}

function divide(a,b) {
    num = Number(a) / Number(b);
    return roundToThree(num);
}

function operate(firstNum, secondNum, operator) {
    let result;
    if (operator === "+") {
        result = add(firstNum, secondNum);
    } else if (operator === "−") {
        result = subtract(firstNum, secondNum);
    } else if (operator === "×") {
        result = multiply(firstNum, secondNum);
    } else if (operator === "÷") {
        result = divide(firstNum, secondNum);
    }
    return result;
}

function roundToThree(num) {
    return +(Math.round(num + "e+3")  + "e-3");
}
