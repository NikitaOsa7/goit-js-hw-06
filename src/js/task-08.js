const formEl = document.querySelector('form.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const formData = { email, password };
    if (email && password) {
        console.log(formData);
    }
    else {
        alert('Пожалуйста, заполните все поля');
    }
    formData.forEach((value, name) => {
        console.log('Значение свойства', value);
        console.log('Имя поля', name)
    });
    if (email.value === "" || password.value === "") {
        onFormSubmit.reset()
     }
};


