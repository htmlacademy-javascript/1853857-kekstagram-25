const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successElement = successTemplate.cloneNode(true);
const successButtonClose = successElement.querySelector('.success__button');
const hashtagsInput = document.querySelector('.text__hashtags');
const infoComment = document.querySelector('.text__description');
const scaleControl = document.querySelector('.scale__control--value');
const imgFilterChangeable = document.querySelector('.img-upload__preview--changeable');
const radioButtonOriginal = document.getElementById('effect-none');
const sliderElement = document.querySelector('.effect-level__slider');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorElement = errorTemplate.cloneNode(true);
const errorButtonClose = errorElement.querySelector('.error__button');

const ALERT_SHOW_TIME = 5000;
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const onInitialProperties = () => {
  hashtagsInput.value = '';
  infoComment.value = '';
  scaleControl.value = 100;
  imgFilterChangeable.className = '.img-upload__preview--changeable';
  imgFilterChangeable.style.transform = 'scale(1)';
  imgFilterChangeable.style.filter = 'none';
  radioButtonOriginal.checked = true;
  if (imgFilterChangeable.classList.contains('.img-upload__preview--changeable')){
    imgFilterChangeable.style.filter = 'none';
    sliderElement.style.display = 'none';
  }
};

const onSuccessPopapClosedEsc = (keydownEvt) =>{
  if (keydownEvt.keyCode === 27) {
    onInitialProperties();
    document.querySelector('body').removeChild(successElement);
  }
};

const onSuccessPopapClosed = () =>{
  document.querySelector('body').removeChild(successElement);
  onInitialProperties();
  document.removeEventListener('click', onSuccessPopapClosed);
  document.removeEventListener('keydown', onSuccessPopapClosedEsc);
};

const sendingSuccess = () => {
  document.querySelector('body').appendChild(successElement);
  successButtonClose.addEventListener('click', onSuccessPopapClosed);
  document.addEventListener('click', onSuccessPopapClosed);
  document.addEventListener('keydown', onSuccessPopapClosedEsc);
};

const onErrorPopapClosedEsc = (keydownEvt) =>{
  if (keydownEvt.keyCode === 27) {
    document.querySelector('body').removeChild(errorElement);
  }
};

const onErrorPopapClosed = () =>{
  document.querySelector('body').removeChild(errorElement);
  document.removeEventListener('click', onErrorPopapClosed);
  document.removeEventListener('keydown', onErrorPopapClosedEsc);
};

const sendingError = () => {
  document.querySelector('body').appendChild(errorElement);
  errorButtonClose.addEventListener('click', onErrorPopapClosed);
  document.addEventListener('click', onErrorPopapClosed);
  document.addEventListener('keydown', onErrorPopapClosedEsc);
};

export { sendingSuccess, sendingError, showAlert, onInitialProperties, debounce };
