function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('button')
const spanEl = document.querySelector('span')

buttonEl.addEventListener('click', onBodyColorChange);

function onBodyColorChange (event) {
  const newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  spanEl.textContent = newColor;
}


