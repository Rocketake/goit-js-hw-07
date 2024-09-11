const numberOfCategories = document.querySelector('#categories');
console.log(`Number of categories ${numberOfCategories.children.length}`);

const categories = document.querySelectorAll('.item');

categories.forEach(el => {
  const category = el.querySelector('h2');
  console.log(`Category: ${category.textContent}`);
  const elements = el.querySelectorAll('ul>li');
  console.log(`Elements: ${elements.length}`);
});
