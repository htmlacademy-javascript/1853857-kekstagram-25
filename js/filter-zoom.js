const scaleControl = document.querySelector('.scale__control--value');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const imgFilterChangeable = document.querySelector('.img-upload__preview--changeable');

scaleControl.value = 100;

scaleControlSmaller.addEventListener('click', () => {
  if(scaleControl.value > 25){
    imgFilterChangeable.style.transform = `scale(${scaleControl.value / 100 - 0.25})`;
    scaleControl.value = Number(scaleControl.value) - 25;
  }
});

scaleControlBigger.addEventListener('click', () => {
  if(scaleControl.value < 100){
    imgFilterChangeable.style.transform = `scale(${scaleControl.value / 100 + 0.25})`;
    scaleControl.value = Number(scaleControl.value) + 25;
  }
});
