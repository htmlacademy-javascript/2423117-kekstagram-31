import { isEscapeKey } from './utils';
import { renderComments, renderNextComment } from './render-comments';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const pictureCloseButton = bigPicture.querySelector('.big-picture__cancel');
const likesCount = bigPicture.querySelector('.likes-count');
const pictureDescription = bigPicture.querySelector('.social__caption');

// const commentCount = bigPicture.querySelector('.social__comment-count');
const commentShowCount = bigPicture.querySelector('.social__comment-shown-count');
const commentTotalCount = document.querySelector('.social__comment-total-count');

export const openBigPicture = (dataPhoto) => {
  bigPicture.classList.remove('hidden');

  bigPictureImage.src = dataPhoto.url;
  likesCount.textContent = dataPhoto.likes;
  pictureDescription.innerHTML = dataPhoto.description;
  commentTotalCount.textContent = dataPhoto.comments.length;
  commentShowCount.textContent = dataPhoto.comments.length;
  renderComments(dataPhoto.comments);

  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

  renderNextComment(dataPhoto.comments);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt){
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

pictureCloseButton.addEventListener('click', closeBigPicture);
