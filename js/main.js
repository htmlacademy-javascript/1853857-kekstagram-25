function randomNumber(min, max) {
  const RANDOM = min + Math.RANDOM() * (max + 1 - min);
  return Math.floor(RANDOM);
}

randomNumber(2,11);

function getLineString (string, maxChars) {
  return string.length <= maxChars;
}

getLineString('Hello World!',10);
