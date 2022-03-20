import getInfoPhoto from './data.js';

const bigPicture = document.querySelector('.big-picture');
const buttonClose = document.querySelector('.big-picture__cancel');
const offScroll = document.querySelector('body');

const pictureListElement = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const thumbnailDrawing = getInfoPhoto();

const pictureListFragment = document.createDocumentFragment();

const onFullPictureEscClose = (keydownEvt) => {
  if (keydownEvt.keyCode === 27) {
    bigPicture.classList.add('hidden');
    offScroll.classList.remove('modal-open');
  }
};

const onPictureElementClick = (evt) => {
  evt.preventDefault();
  bigPicture.classList.remove('hidden');
  offScroll.classList.add('modal-open');
  document.addEventListener('keydown', onFullPictureEscClose);
  thumbnailDrawing.forEach(({ url, likes, comments }) => {
    bigPicture.querySelector('.big-picture__img--full').src = url;
    bigPicture.querySelector('.likes-count').textContent = likes;
    bigPicture.querySelector('.comments-count').textContent = comments.length;
  });

};

thumbnailDrawing.forEach(({ url, likes, comments }) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  pictureElement.addEventListener('click', onPictureElementClick);
  pictureListFragment.appendChild(pictureElement);
});

pictureListElement.appendChild(pictureListFragment);

const onFullPictureButtonClose = (evt) => {
  evt.preventDefault();
  bigPicture.classList.add('hidden');
  offScroll.classList.remove('modal-open');
  document.removeEventListener('keydown', onFullPictureEscClose);
};
buttonClose.addEventListener('click', onFullPictureButtonClose);
