let counterValue = 1;

const decrButton = document.querySelector('button[data-action="decrement"]');
const incrButton = document.querySelector('button[data-action="increment"]');

const valueEl = document.querySelector('#value');

const onDecrClick = event => {
  valueEl.textContent = counterValue -= 1;
}

const onIncrClick = event => {
  valueEl.textContent = counterValue += 1;
}


decrButton.addEventListener('click', onDecrClick);
incrButton.addEventListener('click', onIncrClick);




