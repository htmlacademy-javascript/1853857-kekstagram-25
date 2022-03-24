import { getRandomNumber, getRandomMinMax, getRandomArrayElement } from './util.js';

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const DESCRIPT_PHOTO = [
  'Отличная фотография',
  'Хорошая фотография',
  'Суперская фотография',
  'Мега фотография',
  'Супер-пупер фотография',
  'Супер-мега-гига фотография',
];

const MESSAGE_COMMENT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент?!',
];

const getCommens = (index) => (
  {
    id: index + 1,
    avatar: `img/avatar-${getRandomMinMax(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGE_COMMENT),
    name: getRandomArrayElement(NAMES),
  }
);

const getIdComments = (item, index) => getCommens(index);
const newArray = () => Array.from({ length: getRandomMinMax(1, 9) }, getIdComments);

const getPhoto = (index) => (
  {
    id: index + 1,
    url: `photos/${getRandomNumber()}.jpg`,
    description: getRandomArrayElement(DESCRIPT_PHOTO),
    likes: getRandomMinMax(15, 250),
    comments: newArray(),
  }
);

const getInfoPhoto = () => Array.from({ length: 25 }, (item, index) => getPhoto(index));

export default getInfoPhoto;
