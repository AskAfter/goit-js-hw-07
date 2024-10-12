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

create.addEventListener('click', () => {
  const inputValue = input.value;

  if (isNaN(inputValue) || inputValue < 1 || inputValue > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }

  createBoxes(inputValue);
});

function createBoxes(amount) {
  boxes.innerHTML = '';

  let heightWidth = 30;
  let boxesHTML = '';

  for (let i = 1; i <= amount; i++) {
    const color = getRandomHexColor();
    boxesHTML += `<div style="width: ${heightWidth}px; height: ${heightWidth}px; background-color: ${color}; margin: 5px;"></div>`;
    heightWidth += 10;
  }

  boxes.insertAdjacentHTML('beforeend', boxesHTML);
}

destroy.addEventListener('click', () => {
  boxes.innerHTML = '';
});

const btnDestroy = destroy.addEventListener('click', () => {
  boxes.innerHTML = '';
});
