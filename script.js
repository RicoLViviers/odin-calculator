function add(num1, num2)
{
    if (Number.isInteger(num1) && Number.isInteger(num2))
    {
        return num1 + num2;
    }
}

function subtract(num1, num2)
{
    if (Number.isInteger(num1) && Number.isInteger(num2))
    {
        return num1 - num2;
    }
}

function multiply(num1, num2)
{
    if (Number.isInteger(num1) && Number.isInteger(num2))
    {
        return num1 * num2;
    }
}

function divide(num1, num2)
{
    if (Number.isInteger(num1) && Number.isInteger(num2))
    {
        return num1 / num2;
    }
}

function operate(num1, num2, operatioMode)
{
    if (operatioMode == "+")
    {
        return add(num1, num2);
    }
    else if (operatioMode == "-")
    {
        return subtract(num1, num2);
    }
    else if (operatioMode == "*")
    {
        return multiply(num1, num2);
    }
    else if (operatioMode == "/")
    {
        return divide(num1, num2);
    }
    else
    {
        console.log("Invalid operation " + operatioMode)
    }
}

let num1;
let num2;
let operation;

const buttons = document.querySelectorAll(".calc-button");
const buttonContainer = document.querySelector(".buttons-container");
const answerP = document.getElementById("answer");

let isMouseDown = false;

// Track whether the mouse button is held down
document.addEventListener("mousedown", () => {
    isMouseDown = true;
});

document.addEventListener("mouseup", () => {
    isMouseDown = false;
});

buttonContainer.addEventListener("mousedown", (event) => {
    if (event.target.classList.contains("calc-button")) {
        const text = event.target.innerText;
        const number = Number(text);

        if (Number.isInteger(number) && text.trim() !== "") {
            answerP.innerText += text;
        }
        else {
            
            switch (text) {
                case "=":
                    num2 = Number(answerP.innerText);

                    answerP.innerText = operate(num1, num2, operation);
                    break;


                default:
                    num1 = Number(answerP.innerText);

                    operation = text;
                    answerP.innerText = "";
                    break;
            }
        }
    }
});
