import { socialComments } from './setup';

const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

// Создание комментария к фотографии
const createComments = ({avatar, name, message}) => {
  const commentsElement = commentTemplate.cloneNode(true);

  const peoplesAvatar = commentsElement.querySelector('.social__picture');
  const peoplesMessage = commentsElement.querySelector('.social__text');
  peoplesAvatar.src = avatar;
  peoplesAvatar.alt = name;
  peoplesMessage.textContent = message;

  return commentsElement;
};

// Рендер комментариев к фотографии
const renderComments = (comments) => {
  const commentsListFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const commentElement = createComments(comment);
    commentsListFragment.append(commentElement);
  });
  socialComments.append(commentsListFragment);
};

export { renderComments };
