function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls>input');
const createButton = document.querySelector('button[data-create="Create"]');
const destroyButton = document.querySelector(
  '#controls button[data-destroy="Destroy"]'
);
const boxesField = document.querySelector('#boxes');

const createBoxes = amount => {
  destroyBoxes();
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
    boxes.append(div);
    input.value = '';
  }
};

const destroyBoxes = () => {
  boxesField.innerHTML = '';
};

createButton.addEventListener('click', event => {
  if (1 <= input.value <= 100) {
    createBoxes(input.value);
  }
});

destroyButton.addEventListener('click', () => destroyBoxes());
