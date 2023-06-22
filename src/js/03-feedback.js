import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const inputEmail = form.querySelector('input[name=email]');
const inputMessage = form.querySelector('textarea[name=message]');
const storageKey = 'feedback-form-state';

const saveFormData = throttle(() => {
  const formData = {
    email: inputEmail.value,
    message: inputMessage.value,
  };
    localStorage.setItem(storageKey, JSON.stringify(formData));
    
    // console.log(formData)
}, 500);

const loadSaveData = () => {
  const savedData = localStorage.getItem(storageKey);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    inputEmail.value = email;
    inputMessage.value = message;
  }
    console.log(savedData)
};

form.addEventListener('input', saveFormData);
window.addEventListener('load', loadSaveData);

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    email: inputEmail.value,
    message: inputMessage.value,
  };
  console.log(formData);

  localStorage.removeItem(storageKey);
  form.reset();
});
