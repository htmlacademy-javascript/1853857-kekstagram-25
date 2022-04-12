const FILES = ['gif', 'jpg', 'jpeg', 'png'];
const fileChooser = document.querySelector('.img-upload__input');
const preview = document.querySelector('.img-upload__preview--changeable');

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];

  const matches = FILES.some((it) => {
    const fileName = file.name.toLowerCase();
    return fileName.endsWith(it);
  });

  if (matches) {
    preview.src = URL.createObjectURL(file);
  }
});
