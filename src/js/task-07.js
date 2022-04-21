const inputEl = document.querySelector('#font-size-control');
const textFontEl = document.querySelector('#text');

inputEl.addEventListener('input', function () {
    textFontEl.style.fontSize = `${event.currentTarget.value}px`
})