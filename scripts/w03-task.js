/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let number1 = Number(document.querySelector("#add1").value);
  let number2 = Number(document.querySelector("#add2").value);

  let sumEl = document.querySelector("#sum");
  sumEl.value = add(number1, number2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
  return number1 - number2;
}

function subtractNumbers() {
  let number1 = Number(document.querySelector("#subtract1").value);
  let number2 = Number(document.querySelector("#subtract2").value);

  let differenceEl = document.querySelector("#difference");
  differenceEl.value = subtract(number1, number2);
}

document
  .querySelector("#subtractNumbers")
  .addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
  return number1 * number2;
};

const multiplyNumbers = () => {
  let number1 = Number(document.querySelector("#factor1").value);
  let number2 = Number(document.querySelector("#factor2").value);

  let productEl = document.querySelector("#product");
  productEl.value = multiply(number1, number2);
};

document
  .querySelector("#multiplyNumbers")
  .addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => {
  return number1 / number2;
};

const divideNumbers = () => {
  let number1 = Number(document.querySelector("#dividend").value);
  let number2 = Number(document.querySelector("#divisor").value);

  let productEl = document.querySelector("#quotient");
  productEl.value = divide(number1, number2);
};

document
  .querySelector("#divideNumbers")
  .addEventListener("click", divideNumbers);

/* Decision Structure */

const getTotalDue = (subtotal, isMemberClub) => {
  console.log(isMemberClub);
  if (!isMemberClub) return subtotal;
  return subtotal + subtotal * 0.2;
};

const onClickTotalDueBtn = () => {
  let subtotal = Number(document.querySelector("#subtotal").value);
  let isMemberClub = document.querySelector("#member").checked;

  let totalDue = getTotalDue(subtotal, isMemberClub).toFixed(2);
  document.querySelector("#total").innerHTML = `$ ${totalDue}`;
};

document
  .querySelector("#getTotal")
  .addEventListener("click", onClickTotalDueBtn);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
numbers = Array.from({ length: 13 }, (_, i) => i + 1);
document.querySelector("#array").innerHTML = numbers;

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbers.filter(
  (numb) => numb % 2 === 1,
);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbers.filter(
  (numb) => numb % 2 === 0,
);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbers.reduce(
  (sum, numb) => sum + numb,
);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbers.map(
  (numb) => numb * 2,
);

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = numbers
  .map((numb) => numb * 2)
  .reduce((sum, numb) => sum + numb);
