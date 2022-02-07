let counterValue = 0;

const onButtonDecrClick = event => {
  valueEl.textContent = counterValue -= 1;
}

const onButtonIncrClick = event => {
  valueEl.textContent = counterValue += 1;
}

const counter = document.querySelector('#counter')
const buttonDecr = document.querySelector('button[data-action = "decrement"]');
const buttonIncr = document.querySelector('button[data-action = "increment"]');

buttonDecr.addEventListener('click', onButtonDecrClick);
buttonIncr.addEventListener('click', onButtonIncrClick);

const valueEl = document.querySelector("#value");

console.log(counterValue);
