function randomNumber(min, max) {
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};

randomNumber(2,11);

function getLineString (string, maxChars) {
  return string.length <= maxChars;
 }
getLineString("Hello World!",10);
