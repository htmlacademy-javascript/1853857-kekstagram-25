import { renderSimilarList } from './rendering.js';
import { showAlert } from './util.js';
import { renderFilters } from './filter-location.js';

const filterRendering = document.querySelector('.img-filters');

const DATA_ACQUISITION = 'https://25.javascript.pages.academy/kekstagram/data';
const DATA_SENDING = 'https://25.javascript.pages.academy/kekstagram';

const getData = (onSuccsess) => {
  fetch(DATA_ACQUISITION)
    .then((response) => response.json())
    .then((pictures) => {
      onSuccsess(pictures);
    })
    .catch(() => {
      showAlert('Не удалось загрузить изображения с сервера');
    });
};

getData((pictures) => {
  renderSimilarList(pictures);
  renderFilters(pictures);
  filterRendering.classList.remove('img-filters--inactive');
});

const sendData = (onSuccess, onFail, body) => {
  fetch(
    DATA_SENDING,
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
