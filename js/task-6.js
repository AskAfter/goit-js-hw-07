function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

destroy.style.backgroundColor = '#FF4E4E';

destroy.addEventListener('mouseover', () => {
  destroy.style.backgroundColor = '#FF7070';
});
destroy.addEventListener('mouseout', () => {
  destroy.style.backgroundColor = '#FF4E4E';
});

const btnCreate = create.addEventListener('click', () => {
  const inputValue = input.value;
  createBoxes(inputValue);
});

function createBoxes(amount) {
  let heightWidth = 30;
  if (amount >= 1 && amount <= 100) {
    boxes.innerHTML = '';
    for (let i = 1; i <= amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${heightWidth}px`;
      box.style.height = `${heightWidth}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.classList.add('boxes');
      heightWidth += 10;
      boxes.appendChild(box);
    }
  }
}

const btnDestroy = destroy.addEventListener('click', () => {
  boxes.innerHTML = '';
});

// const list = images
//   .map(
//     image =>
//       `<li class="list"><img height="300px" width="360px" src="${image.url}" alt="${image.alt}"></li>`
//   )
//   .join('');
// galleryList.insertAdjacentHTML('beforeend', list);

// textInput.forEach(input => {
//   input.addEventListener('focus', () => {
//     input.placeholder = 'Type area';
//   });
//   input.addEventListener('blur', () => {
//     input.placeholder = '';
//   });
// });

// function funcSubmit(event) {
//   event.preventDefault();
//   const submitForm = event.target;
//   const email = submitForm.elements.email.value;
//   const password = submitForm.elements.password.value;
//   if (email === '' || password === '') {
//     return console.log('All form fields must be filled in');
//   }
//   userData.email = email.trim();
//   userData.password = password.trim();
//   console.log(userData);
//   form.reset();
// }
