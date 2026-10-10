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
        add(num1, num2);
    }
    else if (operatioMode == "-")
    {
        subtract(num1, num2);
    }
    else if (operatioMode == "*")
    {
        multiply(num1, num2);
    }
    else if (operatioMode == "/")
    {
        divide(num1, num2);
    }
    else
    {
        console.log("Invalid operation " + operatioMode)
    }
}

let num1;
let num2;
let operation;

