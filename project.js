const numOne = document.getElementById("numOne");
let numOneValue = numOne.value
const numTwo = document.getElementById("numTwo");
const numTwoValue = numTwo.value
const operator = document.getElementById("operator");
const operatorValue = operator.value

function calculation() {
    if (numOne.value === "3") {
        return console.log(numOne.value);
    } else {
        return console.log("meh")
    }
}

numOne.addEventListener("click", e => {
    calculation();
  });



