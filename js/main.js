function randomNumber(min, max) {
  if(min >= 0 && max >= min){
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
  }
  return('Ошибка');
}

randomNumber(1,0);

function getLineString (string, maxChars) {
  return string.length <= maxChars;
}

getLineString('Hello World!',10);
