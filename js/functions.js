// Первое задание
const getLength = (string, length) => string.length <= length;

getLength('проверяемая строка', 20);
getLength('проверяемая строка', 18);
getLength('проверяемая строка', 10);

// Второе задание
const isPalindrom = (str) => {
  if (!str?.trim().length){
    return false;
  }

  const reversString = str.trim().toLowerCase().split().revers().join();
  return str === reversString;
};

isPalindrom('топот');
isPalindrom('ДовОд');
isPalindrom('Кекс');
isPalindrom('Лёша на полке клопа нашёл ');


