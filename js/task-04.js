let counterValue = 0;
const valueEL = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const onClickDecrementBtn = (event) => {
  counterValue -= 1;
  valueEL.textContent = counterValue;
};

const onClickIncrementBtn = (event) => {
  counterValue += 1;
  valueEL.textContent = counterValue;
};

decrementBtn.addEventListener("click", onClickDecrementBtn);
incrementBtn.addEventListener("click", onClickIncrementBtn);
