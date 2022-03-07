function getLineString(string, maxChars) {
  return string.length <= maxChars;
}

getLineString('Hello World!', 10);

const randoms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20, 21, 22, 23, 24, 25];

const getRandomNumber = () => {
  const rnd = Math.floor(Math.random() * randoms.length);
  const toReturn = randoms[rnd];
  randoms.splice(rnd, 1);
  return toReturn;
};

function getRandomMinMax(min, max) {
  if (min >= 0 && max >= min) {
    const random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
  }
  return ('Ошибка');
}

const getRandomArrayElement = (elements) => elements[getRandomMinMax(0, elements.length - 1)];

export { getRandomNumber, getRandomMinMax, getRandomArrayElement };
