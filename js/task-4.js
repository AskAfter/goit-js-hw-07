const form = document.querySelector('.login-form');

form.addEventListener('submit', funcSubmit);

const textInput = document.querySelectorAll('.login-form input');

const userData = {};

textInput.forEach(input => {
  input.addEventListener('focus', () => {
    input.placeholder = 'Type area';
  });
  input.addEventListener('blur', () => {
    input.placeholder = '';
  });
});

function funcSubmit(event) {
  event.preventDefault();
  const submitForm = event.target;
  const email = submitForm.elements.email.value;
  const password = submitForm.elements.password.value;
  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }
  userData.email = email.trim();
  userData.password = password.trim();
  console.log(userData);
  form.reset();
}
