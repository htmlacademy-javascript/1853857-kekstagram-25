const bigPicture = document.querySelector('.big-picture');
const buttonClose = document.querySelector('.big-picture__cancel');
const offScroll = document.querySelector('body');

const pictureList = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const commentsList = document.querySelector('.social__comments');
const commentsTemplate = document.querySelector('#social__comment').content.querySelector('.social__comment');
const commentsListFragment = document.createDocumentFragment();
const commentsLoadMore = bigPicture.querySelector('.social__comments-loader');
commentsLoadMore.classList.add('hidden');

const onFullPictureEscClose = (keydownEvt) => {
  if (keydownEvt.keyCode === 27) {
    bigPicture.classList.add('hidden');
    offScroll.classList.remove('modal-open');
  }
};

const substitutionComment = (thumbnailDrawing,index) => {
  commentsList.innerHTML = '';
  let rangeMax = 5;

  const ClickLoadMore = () => {
    if (thumbnailDrawing[index].comments.length > 5 ){
      commentsLoadMore.classList.remove('hidden');
    } else {
      commentsLoadMore.classList.add('hidden');
    }
    if (rangeMax >=thumbnailDrawing[index].comments.length) {
      commentsLoadMore.classList.add('hidden');
    }

    const commentsConteiner = thumbnailDrawing[index].comments.slice(0, rangeMax);

    for (let i = 0; i < commentsConteiner.length;i++){
      const commentElement = commentsTemplate.cloneNode(true);
      bigPicture.querySelector('.social__picture').src = commentsConteiner[i].avatar;
      commentElement.querySelector('.social__picture').src = commentsConteiner[i].avatar;
      commentElement.querySelector('.social__picture').alt = commentsConteiner[i].name;
      commentElement.querySelector('.social__text').textContent = commentsConteiner[i].message;
      commentsListFragment.appendChild(commentElement);
    }
    commentsList.appendChild(commentsListFragment);
    bigPicture.querySelector('.comments-count-visible').textContent = commentsConteiner.length;
  };

  ClickLoadMore();

  const onClickLoadMore = () => {
    rangeMax +=5;
    commentsList.innerHTML = '';
    ClickLoadMore();
  };

  commentsLoadMore.addEventListener('click', onClickLoadMore);
  bigPicture.querySelector('.comments-count-visible').innerHTML = '5';
};

const RenderSimilarList = (thumbnailDrawing) => {
  const pictureListFragment = document.createDocumentFragment();
  thumbnailDrawing.forEach(({ url, description, likes, comments }, index) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.addEventListener('click', (evt) => {
      evt.preventDefault();

      substitutionComment(thumbnailDrawing,index);
      document.addEventListener('keydown', onFullPictureEscClose);
      bigPicture.classList.remove('hidden');
      offScroll.classList.add('modal-open');

      bigPicture.querySelector('.big-picture__img--full').src = evt.target.src;
      bigPicture.querySelector('.likes-count').textContent = likes;
      bigPicture.querySelector('.comments-count').textContent = comments.length;
      bigPicture.querySelector('.social__caption').textContent = description;
    });

    pictureListFragment.appendChild(pictureElement);
  });
  pictureList.appendChild(pictureListFragment);
};

const onFullPictureButtonClose = (evt) => {
  evt.preventDefault();
  bigPicture.classList.add('hidden');
  offScroll.classList.remove('modal-open');
  document.removeEventListener('keydown', onFullPictureEscClose);
};
buttonClose.addEventListener('click', onFullPictureButtonClose);

export { RenderSimilarList };
