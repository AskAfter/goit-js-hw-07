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
