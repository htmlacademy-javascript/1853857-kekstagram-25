const form = document.querySelector('.img-upload__form');
const formSubmit = form.querySelector('img-upload__submit');
const textHashtags = form.querySelector('.text__hashtags');
const regularExpressions = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const pristine = new Pristine (form);

function provAdress() {
  const adr = textHashtags.value;
  const prov = regularExpressions.test(adr);
  if (prov === true) {
    formSubmit.disabled = false;
  }else {
    formSubmit.disabled = true;
  }
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  provAdress();
  const isValid = pristine.validate();
  if (!isValid) {
    formSubmit.disabled = true;
  }
});

