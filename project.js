// Grabs elements from HTML and assigns them to variables
const numOne = document.getElementById("numOne");
const numTwo = document.getElementById("numTwo");
const operator = document.getElementById("operator");
const answer = document.createElement('p')
const body = document.querySelector('body')
const button = document.querySelector('button')

// Calculation occurs based on whether it's addition, subtraction, multiplication, etc.
function calculation() {
    if (operator.value === "+") {
        body.append(answer);
        const sumResponse = parseInt(numOne.value) + parseInt(numTwo.value)
        return answer.innerText = numOne.value + "+" + numTwo.value + "=" + sumResponse;
    } else if (operator.value === "-"){
        body.append(answer);
        const sumResponse = parseInt(numOne.value) - parseInt(numTwo.value)
        return answer.innerText = numOne.value + "-" + numTwo.value + "=" + sumResponse;
    } else if (operator.value === "*") {
        body.append(answer);
        const sumResponse = parseInt(numOne.value) * parseInt(numTwo.value)
        return answer.innerText = numOne.value + "*" + numTwo.value + "=" + sumResponse;
    } else if (operator.value === "/") {
        body.append(answer);
        const sumResponse = parseInt(numOne.value) / parseInt(numTwo.value)
        return answer.innerText = numOne.value + "/" + numTwo.value + "=" + sumResponse;
    }
}

// Displays answer when button is clicked
button.addEventListener("click", e => {
    calculation();
  });



