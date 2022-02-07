const categoriesElement = document.querySelectorAll('.item');
console.log('Number of categories', categoriesElement.length);

categoriesElement.forEach(function (category) {
    console.log('Category : ',
        category.firstElementChild.textContent);
    console.log('Elements : ',
        category.lastElementChild.children.length);
});

