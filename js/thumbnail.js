const userPhotos = document.querySelector('.pictures');
const thumbnailDisplay = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnail = ({url, description, likes, comments}, pictureClickHandler) => {
  const photoElement = thumbnailDisplay.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.alt = description;
  photoElement.querySelector('.picture__comments').comments = comments;
  photoElement.querySelector('.picture__likes').likes = likes;

  photoElement.addEventListener('click', () => {
    pictureClickHandler({url, description, likes, comments});
  });
  return photoElement;
};

const renderPhoto = (similarPhoto, pictureClickHandler) => {
  const photoListFragment = document.createDocumentFragment();

  similarPhoto.forEach((picture) => {
    const photoElement = createThumbnail(picture, pictureClickHandler);
    photoListFragment.append(photoElement);
  });
  userPhotos.append(photoListFragment);
};

export{ renderPhoto };
