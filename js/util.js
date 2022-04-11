const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successElement = successTemplate.cloneNode(true);
const successButtonClose = successElement.querySelector('.success__button');
const hashtagsInput = document.querySelector('.text__hashtags');
const infoComment = document.querySelector('.text__description');
const scaleControl = document.querySelector('.scale__control--value');
const imgFilterChangeable = document.querySelector('.img-upload__preview--changeable');
const radioButtonOriginal = document.getElementById('effect-none');
const sliderConteinerElement = document.querySelector('.effect-level');
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
    sliderConteinerElement.style.display = 'none';
  }
};

const onSuccessPopapClosedEsc = (keydownEvt) => {
  if (keydownEvt.keyCode === 27 && document.querySelector('.success')) {
    onInitialProperties();
    document.querySelector('body').removeChild(successElement);
  }
};

const clearSuccessPopap = () => {
  document.querySelector('body').removeChild(successElement);
  onInitialProperties();
};

const onSuccessPopapClosed = (evt) =>{
  if(document.querySelector('.success') && !document.querySelector('.success__inner').contains(evt.target)) {
    clearSuccessPopap();
  }
};

const onSuccessPopapButtonClosed = (evt) =>{
  if(document.querySelector('.success') && document.querySelector('.success__button').contains(evt.target)){
    clearSuccessPopap();
  }
};

const renderSuccess  = () => {
  document.querySelector('body').appendChild(successElement);
  successButtonClose.addEventListener('click', onSuccessPopapButtonClosed);
  document.addEventListener('click', onSuccessPopapClosed);
  document.addEventListener('keydown', onSuccessPopapClosedEsc);
};

const onErrorPopapClosedEsc = (keydownEvt) =>{
  if (keydownEvt.keyCode === 27 && document.querySelector('.error')) {
    document.querySelector('body').removeChild(errorElement);
  }
};

const errorSuccessPopap = () => {
  document.querySelector('body').removeChild(errorElement);
  onInitialProperties();
};

const onErrorPopapClosed = (evt) =>{
  if(document.querySelector('.error') && !document.querySelector('.error__inner').contains(evt.target)) {
    errorSuccessPopap();
  }
};

const onErrorPopapButtonClosed = (evt) =>{
  if(document.querySelector('.error') && document.querySelector('.error__button').contains(evt.target)){
    errorSuccessPopap();
  }
};

const renderError = () => {
  document.querySelector('body').appendChild(errorElement);
  errorButtonClose.addEventListener('click', onErrorPopapButtonClosed);
  document.addEventListener('click', onErrorPopapClosed);
  document.addEventListener('keydown', onErrorPopapClosedEsc);
};

export { renderSuccess , renderError, showAlert, onInitialProperties, debounce };
