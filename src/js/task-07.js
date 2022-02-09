const textEl = document.querySelector(`#text`);
const inputEl = document.querySelector(`#font-size-control`);
console.log(inputEl);
console.log(textEl.textContent);

inputEl.addEventListener(`input`, function () {
    textEl.style.fontSize = `${event.currentTarget.value}px`
});