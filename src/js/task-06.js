const inputEl = document.querySelector("#validation-input");

let currentTargetInput;

inputEl.addEventListener("input", (event) => {
    currentTargetInput = event.currentTarget.value.length;
});

inputEl.addEventListener("blur", () => {
    if (Number(inputEl.getAttribute('data-length')) === currentTargetInput) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
    else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
});

