/**
 * Замыкания можно использовать для сохранения состояния и дальнейшей работы с ним.
 *
 * Кэширование
 *
 * Реализуйте функцию cache, которая вернет функцию, возводящую число в степень и возвращающую результат.
 * Функция должна запоминать аргументы, которые она уже получала и возвращать результат сразу, не вычисляя
 * его повторно.
 *
 * Пример:
 * const calculate = cache();
 * calculate(3, 3); // { value: 27, fromCache: false}
 * calculate(2, 10); // { value: 1024, fromCache: false}
 * calculate(2, 10); // { value: 1024, fromCache: true}
 */

const cache = () => {
	let number, degree, fromCache;
	return (x, y) => {
		if (number !== x || degree !== y) {
			number = x
			degree = y
			fromCache = false
		} else {
			fromCache = true
		}

		return { value: Math.pow(number, degree), fromCache: fromCache }
	}
}
