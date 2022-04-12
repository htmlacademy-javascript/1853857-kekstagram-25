import { setInitialProperties } from './util.js';

const imgUpload = document.querySelector('.img-upload');
const imgUploadOver = imgUpload.querySelector('.img-upload__overlay');

const infoComment = imgUpload.querySelector('.text__description');
const hashtagsInput = document.querySelector('.text__hashtags');

const imgUploadOpen = imgUpload.querySelector('#upload-file');
const imgUploadCancel = imgUpload.querySelector('.img-upload__cancel');

const closeImgUploadEsc = (keydownEvt) => {
  if (keydownEvt.keyCode === 27) {
    imgUploadOver.classList.add('hidden');
    document.body.classList.remove('modal-open');
    imgUploadOpen.value = '';
  }
};

const stopInfoCommentEsc = (keydownStop) => {
  if (keydownStop.keyCode === 27) {
    keydownStop.stopPropagation();
  }
};


imgUploadOpen.addEventListener('input', (evt) => {
  evt.preventDefault();
  imgUploadOver.classList.remove('hidden');
  document.body.classList.add('modal-open');

  setInitialProperties();

  infoComment.addEventListener('keydown', stopInfoCommentEsc);
  hashtagsInput.addEventListener('keydown', stopInfoCommentEsc);

  document.addEventListener('keydown', closeImgUploadEsc);
});

const cancelImgUpload = () => {
  imgUploadOver.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imgUploadOpen.value = '';
  infoComment.removeEventListener('keydown', stopInfoCommentEsc);
  document.removeEventListener('keydown', closeImgUploadEsc);
};

imgUploadCancel.addEventListener('click', cancelImgUpload);

export { cancelImgUpload };
