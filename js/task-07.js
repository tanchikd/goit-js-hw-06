const inputSizeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
// console.log(textEl);

const handleInput = () => {
  textEl.style.fontSize = `${inputSizeEl.value}px`;
};

inputSizeEl.addEventListener("input", handleInput);
