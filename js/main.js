import './rendering.js';
import './form-open.js';
import './form-validation.js';
import './filter-zoom.js';
import './filter-slider.js';
import './api.js';


import setUserFormSubmit from './form-validation.js';
import onImgUploadCancel from './form-open.js';

setUserFormSubmit(onImgUploadCancel);
