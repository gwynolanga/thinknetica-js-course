// Написать функцию для подсчёта количества букв в слове:

function countLetters(str) {
  return str.replace(/[^a-zA-Z]/g, '').length
}
