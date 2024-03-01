import { getRandomArrayElement, getRandomInteger } from './unit.js';
import { MESSAGE_USER, NAMES, DESCRIPTION, MIN_LIKES, MAX_LIKES, COMMENT_COUNT, NUMBER_COUNT } from './setup.js';

const getId = () => {
  let identifier = 0;
  return function () {
    identifier += 1;
    return identifier;
  };
};

const photosId = getId;

const pushComment = () => ({
  id: crypto.randomUUID(Math),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGE_USER),
  name: getRandomArrayElement(NAMES),
});

const getUserPhoto = () => ({
  id: photosId(),
  url: `photos/${photosId()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: Array.from({ length: getRandomInteger(1, COMMENT_COUNT)}, pushComment)
});

const arrayCount = Array.from({ length: NUMBER_COUNT}, getUserPhoto);


export {arrayCount};
