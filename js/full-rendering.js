const bigPicture = document.querySelector('.big-picture');
const buttonClose = bigPicture.querySelector('.cancel');
const buttonOpen = document.querySelector('.picture');
const offScrol = document.querySelector('body');


buttonOpen.addEventListener('click', (evt) => {
  evt.preventDefault();
  bigPicture.classList.remove('hidden');
  offScrol.classList.add('modal-open');

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      bigPicture.classList.add('hidden');
    }
  });
});

buttonClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  bigPicture.classList.add('hidden');
});


