import localStorage from './localStorage';
import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');
const VALUES_KEY = 'feedback-form-state';
// const formData = {};

function getValue() {
  const savedValues = localStorage.load(VALUES_KEY);
//   console.log(savedValues);

  if (savedValues === undefined) {
    return;
  }

  for (const elem in savedValues) {
    form.elements[elem].value = savedValues[elem];
    console.log(savedValues[elem]);
  }

}
getValue();

function onFormInput(event) {

  const email = form.elements.email.value;
  const message = form.elements.message.value;

const formData = {
    email,
    message,
  }
//   console.log(formData);
  localStorage.save(VALUES_KEY, formData);
}


function onFormSubmit(event) {
  event.preventDefault();

  const savedValues = localStorage.load(VALUES_KEY);
  console.log(savedValues);

  localStorage.remove(VALUES_KEY);
  form.reset(); 
}

form.addEventListener('submit', onFormSubmit);

form.addEventListener('input', throttle(onFormInput, 500));
