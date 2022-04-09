const fileChooser = document.querySelector('.img-upload__input');
const preview = document.querySelector('.img-upload__preview--changeable');

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];

  const matches = FILE_TYPES.some((it) => {
    const fileName = file.name.toLowerCase();
    return fileName.endsWith(it);
  });

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
});
