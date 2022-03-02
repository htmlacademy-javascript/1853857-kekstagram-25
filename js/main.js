function getLineString(string, maxChars) {
  return string.length <= maxChars;
}

getLineString('Hello World!', 10);

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

const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20, 21, 22, 23, 24, 25];

function getRandomNum() {
  const rnd = Math.floor(Math.random() * randoms.length);
  const toReturn = randoms[rnd];
  randoms.splice(rnd, 1);
  return toReturn;
}

function getRandomNumber(min, max) {
  if (min >= 0 && max >= min) {
    const random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
  }
  return ('Ошибка');
}

const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
};

const getCommens = () => {
  return {
    id: getRandomNum(),
    avatar: 'img/avatar-' + getRandomNumber(1, 6) + '.svg',
    message: getRandomArrayElement(MESSAGE_COMMENT),
    name: getRandomArrayElement(NAMES),
  };
};

const getPhoto = () => {
  return {
    id: getRandomNum(),
    url: 'photos/' + getRandomNum() + '.jpg',
    description: getRandomArrayElement(DESCRIPT_PHOTO),
    likes: getRandomNumber(15, 250),
    comments: getCommens(),
  };
};

const infoPhoto = Array.from({ length: 25 }, getPhoto);
