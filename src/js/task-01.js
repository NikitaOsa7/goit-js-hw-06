const categorieEl = document.querySelectorAll('.item');
console.log('Number of categories:', categorieEl.length);

categorieEl.forEach(function (category) {
    console.log('Category:', category.firstElementChild.textContent);
    console.log('Elements:', category.lastElementChild.children.length);
})