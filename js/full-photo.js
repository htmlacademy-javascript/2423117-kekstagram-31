const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = document.querySelector('.big-picture__img img');
const closeButtonPicture = document.querySelector('.big-picture__cancel');
const likesCount = bigPicture.querySelector('.likes-count');
const pictureDescription = bigPicture.querySelector('.social__caption');
const commentsCount = document.querySelector('.social__comment-total-count');


export const openBigPicture = (dataPhoto) => {
  bigPicture.classList.remove('hidden');
  bigPictureImage.src = dataPhoto.url;
  likesCount.textContent = dataPhoto.likes;
  pictureDescription.innerHTML = dataPhoto.description;
  commentsCount.innerHTML = dataPhoto.comments; // комментарии выводятся как объекты, а нужны цифры

  body.classList.add('modal-open');
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
};

closeButtonPicture.addEventListener('click', closeBigPicture);
