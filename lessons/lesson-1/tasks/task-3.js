// Написать функцию для реверсии слова не используя встроенные методы:

function reverseString(str) {
  new_str = ''

  for(let i = str.length - 1; i >= 0; i--) {
    new_str += str[i];
  }

  return new_str
}
