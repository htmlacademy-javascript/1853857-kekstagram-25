import { renderSimilarList } from './rendering.js';
import { debounce } from './util.js';

const bigPicture = document.querySelector('.pictures');
const filterRenderingList = document.querySelectorAll('.img-filters__button');
const buttonDefault = document.querySelector('#filter-default');
const buttonRandom = document.querySelector('#filter-random');
const buttonDiscussed = document.querySelector('#filter-discussed');

const activeFilterRendering = (evt) => {
  filterRenderingList.forEach((elem) => {
    elem.classList.remove('img-filters__button--active');
  });
  evt.target.classList.add('img-filters__button--active');
};

const RENDER_DELAY = 50000;

const clearRenderList = (item) => {
  while (bigPicture.querySelector('.picture')) {
    bigPicture.removeChild(bigPicture.querySelector('.picture'));
  }
  renderSimilarList(item);
};


const renderingFilter = (element) => {
  buttonDefault.addEventListener('click',(evt) =>{
    activeFilterRendering(evt);
    debounce(clearRenderList(element),RENDER_DELAY);
  });

  buttonRandom.addEventListener('click', (evt) =>{
    activeFilterRendering(evt);
    const items = [];
    for (let i = 0 ; (i < 10) && (i < element.length) ; i++) {
      const r = Math.floor(Math.random() * (element.length - i)) + i;
      const city = element[r];
      element[r] = element[i];
      element[i] = city;
      items.push(city);
    }
    debounce(clearRenderList(items),RENDER_DELAY);
  });

  const item = element.slice();
  item.sort((a, b) => {
    if (a.comments.length < b.comments.length) {
      return 1;
    }
    if (a.comments.length > b.comments.length) {
      return -1;
    }
    return 0;
  });
  buttonDiscussed.addEventListener('click', (evt) =>{
    activeFilterRendering(evt);
    clearRenderList(item);
  });
};

export { renderingFilter };
