const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

const handleInput = event => {
  if (event.target.value !== '') {
    span.textContent = event.target.value.trim();
  } else {
    span.textContent = 'Anonymous';
  }
};

input.addEventListener('input', handleInput);
