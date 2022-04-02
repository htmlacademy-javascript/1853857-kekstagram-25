const scaleControl = document.querySelector('.scale__control--value');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const imgFilterChangeable = document.querySelector('.img-upload__preview--changeable');

scaleControl.value = 100;
const RANGE_STEP = 25;

scaleControlSmaller.addEventListener('click', () => {
  if(scaleControl.value > 25){
    const smallerImgFilterChangeable = `scale(${scaleControl.value / 100 - 0.25})`;
    imgFilterChangeable.style.transform = smallerImgFilterChangeable;
    scaleControl.value = Number(scaleControl.value) - RANGE_STEP;
  }
});

scaleControlBigger.addEventListener('click', () => {
  if(scaleControl.value < 100){
    const biggerImgFilterChangeable = `scale(${scaleControl.value / 100 + 0.25})`;
    imgFilterChangeable.style.transform = biggerImgFilterChangeable;
    scaleControl.value = Number(scaleControl.value) + RANGE_STEP;
  }
});
