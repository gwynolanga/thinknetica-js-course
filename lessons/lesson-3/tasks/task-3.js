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
	let history = []
	let operations = { '+': (x, y) => x + y, '-': (x, y) => x - y }

	this.history = () => history.map((item) => (Object.assign({}, item)))
	this.clearHistory = () => {
		history = []
	}
	this.operation = (expression) => {
		let operands = expression.match(/-?\d+/g).map((item) => parseFloat(item))
		let operation = expression.replace(/\s*-?\d+\s*/g, '')
		let func = operations[operation]

		history.push({ operation: operation, operands: operands })
		return func ? func(...operands) : NaN
	}
	this.addOperation = (name, func) => {
		operations[name] = func
	}
}
