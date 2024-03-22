const bigPicture = document.querySelector('.big-picture');
const socialComments = bigPicture.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsLoader = bigPicture.querySelector('.comments-loader');

const COMMENT_STEP = 5;
const currentCount = 0;
let currentComments;


// Создание комментария к фотографии
const createComments = ({avatar, name, message}) => {
  const commentsElement = commentTemplate.cloneNode(true);

  const peoplesAvatar = bigPicture.querySelector('.social__picture');
  const peoplesMessage = bigPicture.querySelector('.social__text');
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

  socialComments.textContent = '';
  socialComments.append(commentsListFragment);
};


const renderNextComment = () => {
  const renderedComments = currentComments.slice(currentCount, currentCount + COMMENT_STEP);
  const renderCommentsLength = renderedComments.length + COMMENT_STEP;

  if(renderCommentsLength > currentComments.length){
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
  currentComments += COMMENT_STEP;
};
export { renderComments, renderNextComment };
