const numOne = document.getElementById("numOne");
let numOneValue = numOne.value
const numTwo = document.getElementById("numTwo");
const numTwoValue = numTwo.value
const operator = document.getElementById("operator");
const operatorValue = operator.value

function calculation() {
    if (operator.value === "+") {
        const answer = document.createElement('p')
        const body = document.querySelector('body')
        body.append(answer);
        return answer.innerText = "hello";

        // return console.log(numOne.value);

    } else {
        return console.log("meh")
    }
}

operator.addEventListener("click", e => {
    calculation();
  });



