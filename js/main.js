import './rendering.js';
import './form-open.js';
import './form-validation.js';
import './filter-zoom.js';
import './filter-slider.js';
import './api.js';
import './filter-location.js';
import './dowload-picture.js';


import setUserFormSubmit from './form-validation.js';
import {cancelImgUpload} from './form-open.js';

setUserFormSubmit(cancelImgUpload);
