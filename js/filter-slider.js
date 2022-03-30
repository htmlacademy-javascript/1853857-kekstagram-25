const radioButtonList = document.querySelectorAll('.effects__radio');
const imgFilterChangeable = document.querySelector('.img-upload__preview--changeable');

const sliderElement = document.querySelector('.effect-level__slider');
const valueElementSlider = document.querySelector('.effect-level__value');

valueElementSlider.value = 0.5;

const effects = {
  chrome: {
    class: 'effects__preview--chrome',
    id: 'effect-chrome',
    filter: 'grayscale',
    min : 0.1,
    max : 1,
    start: 1,
    step: 0.1,
    unit : '',
  },
  sepia: {
    class: 'effects__preview--sepia',
    id: 'effect-sepia',
    filter: 'sepia',
    min : 0.1,
    max : 1,
    start: 1,
    step: 0.1,
    unit : '',
  },
  marvin: {
    class: 'effects__preview--marvin',
    id: 'effect-marvin',
    filter: 'invert',
    min : 0,
    max : 100,
    start: 100,
    step: 1,
    unit : '%',
  },
  phobos: {
    class: 'effects__preview--phobos',
    id: 'effect-phobos',
    filter: 'blur',
    min : 0,
    max : 3,
    start: 3,
    step: 0.1,
    unit : 'px',
  },
  heat: {
    class: 'effects__preview--heat',
    id: 'effect-heat',
    filter: 'brightness',
    min : 0,
    max : 3,
    start: 3,
    step: 0.1,
    unit : '',
  },
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0.1,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

radioButtonList.forEach((element) => {
  element.addEventListener('change', (evt) => {
    radioButtonList.forEach((item) => {
      imgFilterChangeable.classList.remove(`effects__preview--${item.value}`);
    });
    imgFilterChangeable.classList.add(`effects__preview--${element.value}`);

    if(imgFilterChangeable.classList.contains('effects__preview--none')) {
      imgFilterChangeable.style.filter = 'none';
      sliderElement.setAttribute('disabled', true);
    } else {
      sliderElement.removeAttribute('disabled');
    }
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: effects[evt.target.value].min,
        max: effects[evt.target.value].max,
      },
      start: effects[evt.target.value].start,
      step: effects[evt.target.value].step,
    });

    sliderElement.noUiSlider.on('update', () => {
      valueElementSlider.value = sliderElement.noUiSlider.get();
      document.getElementsByClassName(`${effects[evt.target.value].class}`)[0].style.filter = `${effects[evt.target.value].filter}(${valueElementSlider.value}${effects[evt.target.value].unit})`;
    });

    imgFilterChangeable.style.webkitFilter = 'saturate(100%)';
  });
});


