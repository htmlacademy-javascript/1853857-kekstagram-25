import { renderSimilarList } from './rendering.js';
import { debounce } from './util.js';

const bigPicture = document.querySelector('.pictures');
const filterRenderingList = document.querySelectorAll('.img-filters__button');
const filtersForm = document.querySelector('.img-filters__form');

const renderActiveFilter = (evt) => {
  filterRenderingList.forEach((element) => {
    element.classList.remove('img-filters__button--active');
    if(evt === element.id){
      element.classList.add('img-filters__button--active');
    }
  });
};

const RENDER_DELAY = 500;

const clearPicturesList = (items) => {
  while (bigPicture.querySelector('.picture')) {
    bigPicture.removeChild(bigPicture.querySelector('.picture'));
  }
  renderSimilarList(items);
};

const getDiscussedFilter = (elements) => {
  elements.sort((a, b) => {
    if (a.comments.length < b.comments.length) {
      return 1;
    }
    if (a.comments.length > b.comments.length) {
      return -1;
    }
    return 0;
  });
};

const onFilterChange = (evt, elements) => {
  renderActiveFilter(evt);
  const copyElements = elements.slice();
  if(evt === 'filter-default'){
    clearPicturesList(elements);
  }

  if(evt === 'filter-random'){
    const items = [];
    for (let i = 0 ; (i < 10) && (i < copyElements.length) ; i++) {
      const r = Math.floor(Math.random() * (copyElements.length - i)) + i;
      const city = copyElements[r];
      copyElements[r] = copyElements[i];
      copyElements[i] = city;
      items.push(city);
    }
    clearPicturesList(items);
  }

  if(evt === 'filter-discussed'){
    getDiscussedFilter(copyElements);
    clearPicturesList(copyElements);
  }
};

const renderFilters = (data) => {
  const handleChange = debounce((evt) => {
    onFilterChange(evt.target.id, data);
  }, RENDER_DELAY);

  filtersForm.addEventListener('click', (evt) => {
    handleChange(evt);
  });
};

export { renderFilters };
