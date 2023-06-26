function calculator() {
  const buttons = document.querySelectorAll(".style-btn");
  const screenInput = document.querySelector(".new-screen");
  const equalBtn = document.querySelector(".equal-btn");
  const clearBtn = document.querySelector(".clear");

  screenInput.value = "";

  buttons.forEach(function (albtns) {
    albtns.addEventListener("click", function (a) {
      let number = a.target.dataset.num;
      console.log(number);
      if (number !== undefined) screenInput.value += number;
    });
  });

  clearBtn.addEventListener("click", function () {
    if (screenInput.value === screenInput.value) {
      screenInput.value = "";
      screenInput.style = "";
    }
  });

  equalBtn.addEventListener("click", function () {
    if (screenInput.value === screenInput.value && screenInput.value !== "") {
      let newString = screenInput.value.toString();
      console.log(newString);
      let result = eval(newString);
      if (result !== Infinity) {
        screenInput.value = result;
      } else {
        screenInput.value = "Cannot divide by zero";
        screenInput.style = "font-size: 20px";
      }
    }
  });
}

calculator();
