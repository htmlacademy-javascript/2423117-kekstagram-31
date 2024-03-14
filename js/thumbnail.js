import {arrayCount} from './data.js';

const userPhotos = document.querySelector('.pictures');
const thumbnailDisplay = document.querySelector('#picture').content.querySelector('.picture');

const similarPhoto = arrayCount();

const photoListFragment = document.createDocumentFragment();

similarPhoto.forEach((photo) => {
  const photoElement = thumbnailDisplay.cloneNode(true);
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.alt = photo.description;
  photoElement.querySelector('.picture__comments').comments = photo.comments;
  photoElement.querySelector('.picture__likes').likes = photo.likes;
  photoListFragment.append(photoElement);
});

userPhotos.append(photoListFragment);
