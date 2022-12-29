import localStorage from './localStorage';
import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');
const VALUES_KEY = 'feedback-form-state';
const formData = {};

function getValue() {
  const savedValues = localStorage.load(VALUES_KEY);

  if (savedValues === undefined) {
    return;
  }

  for (const elem in savedValues) {
    form.elements[elem].value = savedValues[elem];
  }
}
getValue();

function onFormInput(event) {
  const { target } = event;

  const fieldValue = target.value;
  const fieldName = target.name;

  formData[fieldName] = fieldValue;

  localStorage.save(VALUES_KEY, formData);
}


function onFormSubmit(event) {
  event.preventDefault();

  console.log(formData);

  localStorage.remove(VALUES_KEY);
  form.reset(); 

}

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);