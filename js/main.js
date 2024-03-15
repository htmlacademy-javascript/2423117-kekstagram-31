import './utils.js';
import './setup.js';
import {arrayCount} from'./data.js';
import {renderPhoto} from './thumbnail.js';
import { openBigPicture } from './full-photo.js';


const pictureData = arrayCount;

const pictureClickHandler = (dataPhoto) => {
  openBigPicture(dataPhoto);
};

renderPhoto(pictureData, pictureClickHandler);
