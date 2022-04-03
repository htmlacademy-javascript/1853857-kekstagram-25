import renderSimilarList from './rendering.js';
import {showAlert} from './util.js';

const getData = (onSuccsess) => {
  fetch('https://25.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((picture) => {
      onSuccsess(picture);
    })
    .catch(() => {
      showAlert('Не удалось загрузить изображения с сервера');
    });
};

getData((picture) => {
  renderSimilarList(picture);
});

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://25.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};
