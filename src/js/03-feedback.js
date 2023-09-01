import throttle from 'lodash.throttle';

const inputObj = {};

const feedbackForm = document.querySelector('.feedback-form');

try {
  const savedFeedbackState = localStorage.getItem('feedback-form-state');
  const parsedFeedbackState = JSON.parse(savedFeedbackState);
  feedbackForm.email.value = parsedFeedbackState.email;
  feedbackForm.message.value = parsedFeedbackState.message;
} catch (error) {}

const saveInLocalStorage = event => {
  const {
    elements: { email, message },
  } = event.currentTarget;
  inputObj.email = email.value;
  inputObj.message = message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(inputObj));
};

const submitEvent = event => {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(inputObj);
};

feedbackForm.addEventListener('input', throttle(saveInLocalStorage), 500);
feedbackForm.addEventListener('submit', submitEvent);
