const numberCount = 25;
const commentCount = 30;
let id;
const arrayId = [];

const names = [
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

const messageUser = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const description = [
  'Красивый город',
  'Фото на пляже',
  'Вкусная еда',
  'Море, солнце, пляж',
  'Крутая машина',
  'Котейка',
  'Отдых на море'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];


const getId = () => {
  if(id.length > numberCount){
    return 'Больше нет фото';
  }

  id = getRandomInteger(1, numberCount);

  while(arrayId.includes(id)){
    id = getRandomInteger(1, numberCount);
  }
  arrayId.push(id);
  return id;
};

const pushComment = () => ({
  id: crypto.randomUUID(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement({ length: messageUser }),
  name: getRandomArrayElement(names),
});

const getUserPhoto = () => ({
  id: getId(),
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(description),
  likes: getRandomInteger(15, 200),
  comments: Array.from({ length: getRandomInteger(1, commentCount)}, pushComment)
});

const arrayCount = Array.from({ length: numberCount}, getUserPhoto);
