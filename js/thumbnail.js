const userPhotos = document.querySelector('.pictures');
const thumbnailDisplay = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnail = (photo) => {
  const photoElement = thumbnailDisplay.cloneNode(true);
  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.alt = photo.description;
  photoElement.querySelector('.picture__comments').comments = photo.comments;
  photoElement.querySelector('.picture__likes').likes = photo.likes;

  return photoElement;
};

const renderPhoto = (similarPhoto) => {
  const photoListFragment = document.createDocumentFragment();

  similarPhoto.forEach((picture) => {
    const photoElement = createThumbnail(picture);
    photoListFragment.append(photoElement);
  });
  userPhotos.append(photoListFragment);
};

export{ renderPhoto };
