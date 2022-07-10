/**
 * Реализовать функцию для фильтрации массива по длине слов, значения длины указываются включительно,
 * фильтр должен работать так:
 * const fruits = ['lime', 'orange', 'apple', 'banana', '']
 * filterByLength(fruits, 0, 5) // ['lime', 'apple', '']
 */

function filterByLength(array, min, max) {
	return array.filter((item) => (item.length >= min && item.length <= max));
}
