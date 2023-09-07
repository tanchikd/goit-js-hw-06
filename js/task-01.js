const allItems = document.querySelectorAll(".item");
const allItemsSum = allItems.length;
console.log(`Number of categories: ${allItemsSum}`);

allItems.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
