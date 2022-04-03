function getLineString(string, maxChars) {
  return string.length <= maxChars;
}

getLineString('Hello World!', 10);

const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20, 21, 22, 23, 24, 25];

const getRandomNumber = () => {
  const rnd = Math.floor(Math.random() * randoms.length);
  const toReturn = randoms[rnd];
  randoms.splice(rnd, 1);
  return toReturn;
};

function getRandomMinMax(min, max) {
  if (min >= 0 && max >= min) {
    const random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
  }
  return ('Ошибка');
}

const getRandomArrayElement = (elements) => elements[getRandomMinMax(0, elements.length - 1)];

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

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successElement = successTemplate.cloneNode(true);
const successButtonClose = successElement.querySelector('.success__button');
const hashtagsInput = document.querySelector('.text__hashtags');
const infoComment = document.querySelector('.text__description');
const scaleControl = document.querySelector('.scale__control--value');
const imgFilterChangeable = document.querySelector('.img-upload__preview--changeable');
const radioButtonOriginal = document.getElementById('effect-none');

const onSuccessPopapClosed = (keydownEvt) =>{
  const onSuccessPopap = () => {
    document.querySelector('body').removeChild(successElement);
    hashtagsInput.value = '';
    infoComment.value = '';
    scaleControl.value = 100;
    imgFilterChangeable.style.transform = 'scale(1)';
    imgFilterChangeable.style.filter = 'none';
    radioButtonOriginal.checked = true;
  };
  onSuccessPopap();

  if (keydownEvt.keyCode === 27) {
    onSuccessPopap();
  }
};

successButtonClose.addEventListener('click', onSuccessPopapClosed);
const sendingSuccess = () => {
  document.querySelector('body').appendChild(successElement);
  successButtonClose.addEventListener('click', onSuccessPopapClosed);
  document.addEventListener('click', onSuccessPopapClosed);
  document.addEventListener('keydown', onSuccessPopapClosed);
};

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorElement = errorTemplate.cloneNode(true);
const errorButtonClose = errorElement.querySelector('.error__button');

const onErrorPopapClosed = () =>{
  document.addEventListener('keydown', (keydownEvt) => {
    if (keydownEvt.keyCode === 27) {
      document.querySelector('body').removeChild(errorElement);
    }
  });
  document.addEventListener('click', () => {
    document.querySelector('body').removeChild(errorElement);
  });
  errorButtonClose.addEventListener('click', () => {
    document.querySelector('body').removeChild(errorElement);
  });
};

const sendingError = () => {
  document.querySelector('body').appendChild(errorElement);
  onErrorPopapClosed();
};

export { getRandomNumber, getRandomMinMax, getRandomArrayElement, sendingSuccess, sendingError, showAlert };
