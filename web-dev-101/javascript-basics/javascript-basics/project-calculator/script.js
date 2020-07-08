window.onload = () => {
  document.querySelectorAll('.number').forEach((btn) => {
    btn.addEventListener('click', () => {
      numberPressed(+btn.textContent);
    });
  });

  setCurrentValue(0);
}

function numberPressed(n) {
  if (currentValue === 0) {
    setCurrentValue(n);
  } else {
    setCurrentValue(currentValue + '' + n);
  }
}

function setCurrentValue(v) {
  document.querySelector('#display').textContent = v;
  currentValue = v;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "x":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
