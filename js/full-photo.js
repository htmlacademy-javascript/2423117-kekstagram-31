import './thumbnail.js';

const picturesThumbails = document.querySelector('.picture');
const bigPicture = document.querySelector('.big-picture');
const closePictureButton = document.querySelector('.cancel');

picturesThumbails.addEventListener('click', () => {
  bigPicture.classList.remove('hidden');
});
