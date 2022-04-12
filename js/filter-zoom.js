const RANGE_STEP = 25;
const scaleControl = document.querySelector('.scale__control--value');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const imgFilterChangeable = document.querySelector('.img-upload__preview--changeable');

scaleControl.value = 100;

const onScaleControlSmaller = () => {
  if(scaleControl.value > 25){
    const smallerImgFilterChangeable = scaleControl.value / 100 - 0.25;
    imgFilterChangeable.style.transform = `scale(${smallerImgFilterChangeable})`;
    scaleControl.value = Number(scaleControl.value) - RANGE_STEP;
  }
};

scaleControlSmaller.addEventListener('click', onScaleControlSmaller);

const onScaleControlBigger = () => {
  if(scaleControl.value < 100){
    const biggerImgFilterChangeable = scaleControl.value / 100 + 0.25;
    imgFilterChangeable.style.transform = `scale(${biggerImgFilterChangeable})`;
    scaleControl.value = Number(scaleControl.value) + RANGE_STEP;
  }
};

scaleControlBigger.addEventListener('click', onScaleControlBigger);
