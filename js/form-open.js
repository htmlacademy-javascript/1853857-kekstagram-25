const imgUpload = document.querySelector('.img-upload');
const imgUploadOver = imgUpload.querySelector('.img-upload__overlay');

const infoComment = imgUpload.querySelector('.text');

const imgUploadOpen = imgUpload.querySelector('#upload-file');
const imgUploadCancel = imgUpload.querySelector('.img-upload__cancel');

imgUploadOpen.addEventListener('input', (evt) => {
  evt.preventDefault();
  imgUploadOver.classList.remove('hidden');
  document.body.classList.add('modal-open');

  infoComment.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      evt.stopPropagation();
    }
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.keyCode === 27) {
      imgUploadOver.classList.add('hidden');
      document.body.classList.remove('modal-open');
      imgUpload.getElementById('#upload-file').value = '';
    }
  });
});

imgUploadCancel.addEventListener('click', (evt) => {
  evt.preventDefault();
  imgUploadOver.classList.add('hidden');
  document.body.classList.remove('modal-open');
  imgUpload.getElementById('#upload-file').value = '';
});
