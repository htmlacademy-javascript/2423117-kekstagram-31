import { getRandomArrayElement, getRandomInteger } from './unit.js';
import {numberCount, commentCount, minLikesCount, maxLikesCount, names, messageUser, description} from './setup.js';

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
  message: getRandomArrayElement(messageUser),
  name: getRandomArrayElement(names),
});

const getUserPhoto = () => ({
  id: photosId(),
  url: `photos/${photosId()}.jpg`,
  description: getRandomArrayElement(description),
  likes: getRandomInteger(minLikesCount, maxLikesCount),
  comments: Array.from({ length: getRandomInteger(1, commentCount)}, pushComment)
});

const arrayCount = Array.from({ length: numberCount}, getUserPhoto);


export {arrayCount};
