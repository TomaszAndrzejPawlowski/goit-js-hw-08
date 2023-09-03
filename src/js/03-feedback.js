import throttle from 'lodash.throttle';

const inputObj = {};

const feedbackForm = document.querySelector('.feedback-form');

const onReload = () => {
  const savedFeedbackState = localStorage.getItem('feedback-form-state');
  const parsedFeedbackState = JSON.parse(savedFeedbackState);
  if (parsedFeedbackState) {
    feedbackForm.email.value = parsedFeedbackState.email;
    feedbackForm.message.value = parsedFeedbackState.message;
  }
};

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
  if (feedbackForm.email.value === '' || feedbackForm.message.value === '') {
    return alert('Fill all fields to send!');
  }
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(inputObj);
};
onReload();
feedbackForm.addEventListener('input', throttle(saveInLocalStorage), 500);
feedbackForm.addEventListener('submit', submitEvent);
