export const NUMBER_COUNT = 25;
export const COMMENT_COUNT = 30;
export const MIN_LIKES = 15;
export const MAX_LIKES = 200;

export const NAMES = [
  'Никита',
  'Егор',
  'Виктория',
  'Дарья',
  'Арина',
  'Григорий',
  'Елизавета',
  'Марина',
  'Алексей',
  'Алиса',
  'Кира',
  'Ева',
  'Артём',
  'Василиса',
  'Анна'
];

export const MESSAGE_USER = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

export const DESCRIPTION = [
  'Красивый город',
  'Фото на пляже',
  'Вкусная еда',
  'Море, солнце, пляж',
  'Крутая машина',
  'Котейка',
  'Отдых на море'
];

export const bigPicture = document.querySelector('.big-picture');
export const socialComments = bigPicture.querySelector('.social__comments');
export const commentsLoader = bigPicture.querySelector('.comments-loader');
export const COMMENT_STEP = 5;
