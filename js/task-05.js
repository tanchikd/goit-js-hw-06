const textInputEl = document.querySelector("#name-input");
const textOutputEl = document.querySelector("#name-output");
console.log(textInputEl);
console.log(textOutputEl);

textInputEl.addEventListener("input", (event) => {
  textOutputEl.textContent = event.target.value;
  if (event.target.value === "") {
    textOutputEl.textContent = "Anonymous";
  }
});
