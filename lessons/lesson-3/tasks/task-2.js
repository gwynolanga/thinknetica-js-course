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
	let historicalCalculations = {};

	return (number, degree) => {
		let result = historicalCalculations[number + '_' + degree]
		if (result) {
			return { value: result, fromCache: true }
		} else {
			result = Math.pow(number, degree)
			historicalCalculations[number + '_' + degree] = result
			return { value: result, fromCache: false }
		}
	}
}
