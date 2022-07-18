/**
 * Калькулятор
 *
 * Создайте калькулятор позволяющий добавлять в него дополнительные методы и сохранять результат,
 * по умолчанию должны присутствовать методы add, subtract
 *
 * Пример:
 * const calculator = new Calc()
 * calculator.operation('31 + 32') // 63
 * calculator.operation('10 - 2') // 8
 * calculator.addOperation('/', (a, b) => a / b)
 * calculator.operation('10 / 2') // 5
 *
 * Также, он должен хранить историю всех операций и выводить ее по запросу:
 * // [{operation: '+', operands: [31,32]}, {operation: '-', operands: [10,2]}, {operation: '/', operands: [10,2]}]
 * calculator.history()
 *
 * И очищать историю:
 * calculator.clearHistory()
 * calculator.history() // []
 */

const Calc = function() {
	let operations = []
	let methods = [
		{ name: '+', func: (x, y) => x + y },
		{ name: '-', func: (x, y) => x - y }
	]

	this.history = () => operations
	this.clearHistory = () => {
		operations = []
	}
	this.operation = (expression) => {
		let operands = expression.match(/\d+/g).map((item) => parseFloat(item))
		let method_name = expression.replace(/[\d\s]+/g, '')
		let method = methods.find((method) => (method.name === method_name))

		operations.push({ operation: method_name, operands: operands })
		return method ? method.func(...operands) :  NaN
	}
	this.addOperation = (name, func) => {
		methods.push({ name: name, func: func })
	}
}
