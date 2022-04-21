const formEl = document.querySelector('form.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const email = formEl.email.value;
  const password = formEl.password.value;
  const formData = {email, password};

  if (email && password) {
    event.currentTarget.reset()
    console.log(formData);
  }
  else {
    window.alert("Заполните все поля")
  }
}


