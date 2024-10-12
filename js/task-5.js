function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const thumb = document.querySelector('body');
const buttonClick = document.querySelector('.change-color');
const text = document.querySelector('.color');
const changeColor = click => {
  const randomColor = getRandomHexColor();
  thumb.style.backgroundColor = randomColor;
  text.textContent = randomColor;
};

buttonClick.addEventListener('click', changeColor);
