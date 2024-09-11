const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const elements = event.target.elements;

  if (elements[0].value === '' || elements[1].value === '') {
    alert('All form fields must be filled in');
  } else {
    const obj = {};
    obj[elements[0].name] = elements[0].value.trim();
    obj[elements[1].name] = elements[1].value.trim();
    console.log(obj);
  }
  form.reset();
});
