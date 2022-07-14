//  Реализовать функцию, которая принимает текст, и возвращает массив объектов со структурой:
//  { word: 'smth', length: 4, isCapitalized: false }

function wordStatistics(text) {
  return text.replace(/[^а-яА-Я\w\s]|\s\W$/g, '').split(/[\s\r\n\t]+/).map((word) => (
    { word: word, length: word.length, isCapitalized: word[0] === word[0].toUpperCase() }
  ));
}
