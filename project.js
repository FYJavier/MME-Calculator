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
        const sumResponse = parseInt(numOne.value) + parseInt(numTwo.value)
        return answer.innerText = numOne.value + "+" + numTwo.value + "=" + sumResponse;
    } else if (operator.value === "-"){
        const answer = document.createElement('p')
        const body = document.querySelector('body')
        body.append(answer);
        const sumResponse = parseInt(numOne.value) - parseInt(numTwo.value)
        return answer.innerText = numOne.value + "-" + numTwo.value + "=" + sumResponse;
    } else if (operator.value === "*") {
        const answer = document.createElement('p')
        const body = document.querySelector('body')
        body.append(answer);
        const sumResponse = parseInt(numOne.value) * parseInt(numTwo.value)
        return answer.innerText = numOne.value + "*" + numTwo.value + "=" + sumResponse;
    } else if (operator.value === "/") {
        const answer = document.createElement('p')
        const body = document.querySelector('body')
        body.append(answer);
        const sumResponse = parseInt(numOne.value) / parseInt(numTwo.value)
        return answer.innerText = numOne.value + "/" + numTwo.value + "=" + sumResponse;
    }
}

operator.addEventListener("click", e => {
    calculation();
  });



