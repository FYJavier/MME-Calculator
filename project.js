const numOne = document.getElementById("numOne");
const numOneValue = numOne.value
const numTwo = document.getElementById("numTwo");
const numTwoValue = numTwo.value
const operator = document.getElementById("operator");
const operatorValue = operator.value

if (operatorValue === "+") {
    document.write(numOneValue + operator + numTwoValue + "=")
}