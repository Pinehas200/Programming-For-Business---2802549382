const decrease = document.getElementById("decreaseBtn");
const reset = document.getElementById("resetBtn");
const increase = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

// Counter buttons
decrease.onclick = function() {
  count--;
  countLabel.textContent = count;
};

reset.onclick = function() {
  count = 0;
  countLabel.textContent = count;
};

increase.onclick = function() {
  count++;
  countLabel.textContent = count;
};

// Calculator buttons
const numberButtons = document.querySelectorAll(".numberList button");
const firstLabel = document.getElementById("firstLabel");
const secondLabel = document.getElementById("secondLabel");
const operatorLabel = document.getElementById("operatorLabel")

let firstNumber = "";
let secondNumber = "";
let operator = "";

// Loop through all number & operator buttons
numberButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    // If it's a number (0–9)
    if (!isNaN(value)) {
      if (!operator) {
        firstNumber += value;
        firstLabel.textContent = firstNumber;
      } else {
        secondNumber += value;
        secondLabel.textContent = secondNumber;
      }
    }

    // If it's an operator
    else if (["+", "-", "x", "/"].includes(value)) {
      operator = value;
      operatorLabel.textContent = operator;
    }

    // If it's "="
    else if (value === "=") {
      let result;
      const a = Number(firstNumber);
      const b = Number(secondNumber);

      switch (operator) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "x": result = a * b; break;
        case "/": result = b !== 0 ? a / b : "Error"; break;
      }

      countLabel.textContent = result;
      firstLabel.textContent = "";
      operatorLabel.textContent = "";
      secondLabel.textContent = "";
      firstNumber = "";
      secondNumber = "";
      operator = "";
    }
  });
});



