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
  let divBoxes = [];
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxSize += 10;
    divBoxes.push(div);
    input.value = '';
  }
  boxesField.append(...divBoxes);
};

const destroyBoxes = () => {
  boxesField.innerHTML = '';
};

createButton.addEventListener('click', event => {
  if (Number(input.value) >= 1 && Number(input.value) <= 100) {
    createBoxes(input.value);
  }
});

destroyButton.addEventListener('click', () => destroyBoxes());
