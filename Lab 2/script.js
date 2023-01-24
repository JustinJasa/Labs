let calculator = document.getElementById("calculatorForm");
let compute = document.getElementById("equals");
let operations = document.getElementById("operation");
let operand, text;
let result = document.getElementById("result");
let input1 = document.getElementById("operand1");
let input2 = document.getElementById("operand2");

function onChange(operand, text) {
  operand = operations.value;
  text = operations.options[operations.selectedIndex].text;
  console.log(operand);
  console.log(text);
}

operations.onchange = onChange;

calculator.addEventListener("submit", (e) => {
  e.preventDefault();
  let compute;
  if (operations.value == "add") {
    compute = input1.valueAsNumber + input2.valueAsNumber;
  } else if (operations.value == "sub") {
    compute = input1.valueAsNumber - input2.valueAsNumber;
  } else if (operations.value == "mul") {
    compute = input1.valueAsNumber * input2.valueAsNumber;
  } else {
    compute = input1.valueAsNumber / input2.valueAsNumber;
  }
  result.innerText = compute;
});