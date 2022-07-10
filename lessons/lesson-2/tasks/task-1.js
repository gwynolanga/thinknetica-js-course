//  Реализовать функцию, которая принимает текст, и возвращает массив объектов со структурой:
//  { word: 'smth', length: 4, isCapitalized: false }

function wordStatistics(text) {
  return text.replace(/[^a-zA-Z\s]/g, '').split(' ').map((word) => (
    { word: word, length: word.length, isCapitalized: word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90 }
  ));
}
