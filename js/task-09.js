function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textChangeColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");
const body = document.querySelector("body");

btnChangeColor.addEventListener("click", (event) => {
  let randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  textChangeColor.textContent = randomColor;
});
