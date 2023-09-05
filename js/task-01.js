const allItems = document.querySelectorAll(".item");
const allItemsSum = allItems.length;
console.log(`Number of categories: ${allItemsSum}`);

allItems.forEach((element) => {
  let elementTitle = element.querySelector("h2").textContent;
  let titleElements = element.querySelectorAll("li");
  let titleElemntsSum = titleElements.length;

  console.log(`Category: ${elementTitle}`);
  console.log(`Elements ${titleElemntsSum}`);
});
