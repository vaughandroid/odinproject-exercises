let displayValue;
let currentInputValue;
let lastNumber;
let operator;

window.onload = () => {
  document.querySelectorAll('.number').forEach(btn => {
    btn.addEventListener('click', () => {
      numberPressed(+btn.textContent);
    });
  });
  document.querySelectorAll('.operator').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!currentInputValue) return;
      
      let newValue = Number(currentInputValue);
      if (operator && lastNumber) {
        newValue = operate(operator, lastNumber, newValue);
        setDisplayValue(newValue);
      }
      operator = btn.textContent;
      lastNumber = newValue;
      currentInputValue = null;
    });
  });
  document.querySelector('#equals').addEventListener('click', () => {
    equals();
  });
  document.querySelector('#clear').addEventListener('click', () => {
    clear();
  });

  clear();
}

function numberPressed(n) {
  if (currentInputValue) {
    currentInputValue = currentInputValue + '' + n;
  } else {
    currentInputValue = '' + n;
  }
  setDisplayValue(currentInputValue);
}

function setDisplayValue(v) {
  document.querySelector('#display').textContent = v;
  displayValue = v;
}

function operate(operator, a, b) {
  console.log(`operate ${operator} ${a} ${b}`)
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case 'x':
      return multiply(a, b);
    case '/':
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
  if (b === 0) return NaN;
  return a / b;
}

function equals() {
  let newValue = Number(currentInputValue);
  if (operator && lastNumber) {
    newValue = operate(operator, lastNumber, newValue);
    setDisplayValue(newValue);
  }

  operator = null;
  lastNumber = newValue;
  currentInputValue = null;
}

function clear() {
  currentInputValue = null;
  lastNumber = null;
  operator = null;

  setDisplayValue('');
}