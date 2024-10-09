const ulList = document.querySelectorAll('#categories');
const list = document.querySelectorAll('.item');
const listUnder = document.querySelectorAll('.item li');
const numberOfCategories = list.length;
console.log(`Number of categories: ${numberOfCategories}`);
// console.log(list[0]);
list.forEach(evt => {
  const header = evt.querySelector('h2');
  const listUnder = evt.querySelectorAll('li');
  console.log(`Category: ${header.textContent}`);
  console.log(`Elements: ${listUnder.length}`);
});
