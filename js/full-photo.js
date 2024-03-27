import { isEscapeKey } from './utils';
import { bigPicture, commentsLoader, COMMENT_STEP } from './setup';
import { renderComments } from './render-comments';

const body = document.querySelector('body');
const bigPictureImage = bigPicture.querySelector('.big-picture__img img');
const pictureCloseButton = bigPicture.querySelector('.big-picture__cancel');
const likesCount = bigPicture.querySelector('.likes-count');
const pictureDescription = bigPicture.querySelector('.social__caption');

// const commentCount = bigPicture.querySelector('.social__comment-count');
const commentShowCount = bigPicture.querySelector('.social__comment-shown-count');
const commentTotalCount = document.querySelector('.social__comment-total-count');
const socialComments = bigPicture.querySelector('.social__comments');

let dataComments;
let countShowComments;

const renderNextComment = () => {
  if(dataComments.length > COMMENT_STEP){
    countShowComments += COMMENT_STEP;
    renderComments(dataComments.splice(0, COMMENT_STEP));
    commentsLoader.classList.remove('hidden');
  } else {
    countShowComments += dataComments.length;
    renderComments(dataComments);
    commentsLoader.classList.add('hidden');
  }
  commentShowCount.textContent = countShowComments;
};

export const openBigPicture = (dataPhoto) => {
  bigPicture.classList.remove('hidden');
  socialComments.textContent = '';
  countShowComments = 0;
  bigPictureImage.src = dataPhoto.url;
  likesCount.textContent = dataPhoto.likes;
  pictureDescription.innerHTML = dataPhoto.description;
  commentTotalCount.textContent = dataPhoto.comments.length;
  commentShowCount.textContent = dataPhoto.comments.length;
  dataComments = [...dataPhoto.comments];

  renderNextComment();
  commentShowCount.textContent = countShowComments;

  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

commentsLoader.addEventListener('click', renderNextComment);

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
