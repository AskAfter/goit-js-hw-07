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
  const email = event.target.email.value;
  const password = event.target.password.value;
  if (email === '' || password === '') {
    return console.log('All form fields must be filled in');
  }
  userData.email = email.trim();
  userData.password = password.trim();
  console.log(userData);
  form.reset();
}
