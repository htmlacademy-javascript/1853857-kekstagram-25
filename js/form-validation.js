const form = document.querySelector('.img-upload__form');
const formSubmit = form.querySelector('img-upload__submit');

const pristine = new Pristine(form);

const hashtagsInput = document.querySelector('.text__hashtags');

const HASHTAG_VALID_REGEX = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
const MAX_HASHTAG_NUMBERS = 5;

function onHashTagInputValid() {
  const hashTagArray = hashtagsInput.value.toLowerCase().trim().split(' ');
  const uniqueHashTagArray = new Set(hashTagArray);


  if (hashTagArray.length > MAX_HASHTAG_NUMBERS) {
    hashtagsInput.setCustomValidity(`Хэш-тегов не должно быть больше чем ${MAX_HASHTAG_NUMBERS}`);
  } else {
    hashtagsInput.setCustomValidity('');
  }

  hashTagArray.forEach((hashtag) => {
    if (!HASHTAG_VALID_REGEX.test(hashtag)) {
      hashtagsInput.setCustomValidity(
        `Хэш-тег должен начинается с символа # (решётка)

        Хэш-тег должен состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.`,
      );
    } else if (hashTagArray.length !== uniqueHashTagArray.size) {
      hashtagsInput.setCustomValidity('Хэш-теги не должны повторяться');
    } else {
      hashtagsInput.setCustomValidity('');
    }
  });

  hashtagsInput.reportValidity();
}

hashtagsInput.addEventListener('input', onHashTagInputValid);


form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (!isValid) {
    formSubmit.disabled = true;
  }
  hashtagsInput.removeEventListener('input', onHashTagInputValid);
  form.submit();
});
