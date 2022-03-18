const imgUpload = document.querySelector('.img-upload');
const imgUploadOver = imgUpload.querySelector('.img-upload__overlay');

const infoComment = imgUpload.querySelector('.text');

const imgUploadOpen = imgUpload.querySelector('#upload-file');
const imgUploadCancel = imgUpload.querySelector('.img-upload__cancel');

const onImgUploadEscClose = (keydownEvt) => {
  if (keydownEvt.keyCode === 27) {
    imgUploadOver.classList.add('hidden');
    document.body.classList.remove('modal-open');
    imgUploadOpen.value = '';
  }
};

const oninfoCommentEscStop = (keydownStop) => {
  if (keydownStop.keyCode === 27) {
    keydownStop.stopPropagation();
  }
};

imgUploadOpen.addEventListener('input', (evt) => {
  evt.preventDefault();
  imgUploadOver.classList.remove('hidden');
  document.body.classList.add('modal-open');

  infoComment.addEventListener('keydown', oninfoCommentEscStop);

  document.addEventListener('keydown', onImgUploadEscClose);
});

const onimgUploadCancel = (evt) => {
  evt.preventDefault();
  imgUploadOver.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imgUploadOpen.value = '';
  infoComment.removeEventListener('keydown', oninfoCommentEscStop);
  document.removeEventListener('keydown', onImgUploadEscClose);
};

imgUploadCancel.addEventListener('click', onimgUploadCancel);
