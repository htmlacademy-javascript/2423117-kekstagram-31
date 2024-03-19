import { isEscapeKey } from './utils';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = document.querySelector('.big-picture__img img');
const pictureCloseButton = document.querySelector('.big-picture__cancel');
const likesCount = bigPicture.querySelector('.likes-count');
const pictureDescription = bigPicture.querySelector('.social__caption');
const socialComments = bigPicture.querySelector('.social__comments');

const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const commentCount = bigPicture.querySelector('.social__comment-count');
const commentShowCount = bigPicture.querySelector('.social__comment-shown-count');
const commentTotalCount = document.querySelector('.social__comment-total-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

// Рендер комментариев к фотографии
const renderComments = (comments) => {
  const commentsListFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const commentElement = commentTemplate.cloneNode(true);

    const peoplesAvatar = document.querySelector('.social__picture');
    const peoplesMessage = document.querySelector('.social__text');
    peoplesAvatar.src = comment.avatar;
    peoplesAvatar.alt = comment.name;
    peoplesMessage.textContent = comment.message;

    commentsListFragment.append(commentElement);
  });

  socialComments.textContent = '';
  socialComments.append(commentsListFragment);
};

export const openBigPicture = (dataPhoto) => {
  bigPicture.classList.remove('hidden');

  bigPictureImage.src = dataPhoto.url;
  likesCount.textContent = dataPhoto.likes;
  pictureDescription.innerHTML = dataPhoto.description;
  commentShowCount.textContent = dataPhoto.comments;
  commentTotalCount.textContent = dataPhoto.comments.length;
  renderComments(dataPhoto.comments);

  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
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
