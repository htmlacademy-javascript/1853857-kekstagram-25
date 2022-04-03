import {sendingSuccess} from './util.js';
import {sendingError} from './util.js';
import {sendData} from './api.js';

const form = document.querySelector('.img-upload__form');
const submitButton = document.querySelector('.img-upload__submit');

const pristine = new Pristine(form);

const hashtagsInput = document.querySelector('.text__hashtags');

const HASHTAG_VALID_REGEX = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
const MAX_HASHTAG_NUMBERS = 5;

function onHashTagInputValid() {
  const hashTagArray = hashtagsInput.value.toLowerCase().trim().split(' ');
  const uniqueHashTagArray = new Set(hashTagArray);
  let isValid = true;

  if (hashTagArray.length > MAX_HASHTAG_NUMBERS) {
    hashtagsInput.setCustomValidity(`Хэш-тегов не должно быть больше чем ${MAX_HASHTAG_NUMBERS}`);
    isValid = false;
  } else {
    hashtagsInput.setCustomValidity('');
  }

  hashTagArray.forEach((hashtag) => {
    if (!HASHTAG_VALID_REGEX.test(hashtag)) {
      hashtagsInput.setCustomValidity(
        `Хэш-тег должен начинается с символа # (решётка)

        Хэш-тег должен состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.`,
      );
      isValid = false;
    } else if (hashTagArray.length !== uniqueHashTagArray.size) {
      hashtagsInput.setCustomValidity('Хэш-теги не должны повторяться');
      isValid = false;
    }
  });

  if (isValid){
    hashtagsInput.setCustomValidity('');
  }
  return hashtagsInput.reportValidity();
}
hashtagsInput.addEventListener('input', onHashTagInputValid);

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Опубликовываю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if(isValid || onHashTagInputValid){
      blockSubmitButton();
      sendData(
        () => {
          sendingSuccess();
          onSuccess();
          unblockSubmitButton();
        },
        () => {
          sendingError();
          onSuccess();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
      hashtagsInput.removeEventListener('input', onHashTagInputValid);
    }
  });
};

export default setUserFormSubmit;
