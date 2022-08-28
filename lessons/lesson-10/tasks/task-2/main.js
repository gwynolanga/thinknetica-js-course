// Реализовать функцию для фильтрации массива чисел по убыванию
function sortDesc(numbers) {
	if (Array.isArray(numbers)) {
		return numbers.sort((a, b) => {
			if (typeof a === 'number' && typeof b === 'number') {
				return (b - a)
			} else {
				throw 'Array must contain only numbers'
			}
		})
	} else {
		throw 'Argument must be an Array'
	}
}

// Реализовать функцию для фильтрации массива по длине слов
function filterByLength(words, min, max) {
	if (typeof min !== 'number') {
		throw 'Min argument must be a number'
	}

	if (typeof max !== 'number') {
		throw 'Max argument must be a number'
	}

	if (min > max) {
		throw 'Min must be less than or equal to max'
	}

	if (Array.isArray(words)) {
		return words.filter((item) => {
			if (typeof item === 'string') {
				return item.length >= min && item.length <= max
			} else {
				throw 'Array must contain only words'
			}
		})
	} else {
		throw 'Argument must be an Array'
	}
}

// Кэширование
function cache() {
	let historicalCalculations = {};

	return (number, degree) => {
		if (typeof number !== 'number') {
			throw 'Number argument must be a number'
		}

		if (typeof degree !== 'number') {
			throw 'Degree argument must be a number'
		}

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

// Реализуйте функцию MoneyBox
const MoneyBox = function() {
	let coins = 0
	this.addCoin = () => { ++coins }
	this.getAmount = () => coins
}

// Калькулятор
const Calculator = function() {
	let history = []
	let operations = { '+': (x, y) => x + y, '-': (x, y) => x - y }

	this.history = () => history.map((item) => (Object.assign({}, item)))
	this.clearHistory = () => {
		history = []
	}
	this.operation = (expression) => {
		let operands = expression.match(/-?(?:\d+\.)?\d+/g).map((item) => parseFloat(item))
		let operation = expression.replace(/\s*-?\d+\s*/g, '')
		let func = operations[operation]

		if (func) {
			history.push({ operation: operation, operands: operands })
			return func(...operands)
		} else {
			return NaN
		}
	}
	this.addOperation = (name, func) => {
		operations[name] = func
		return undefined
	}
}

// Система продажи билетов
const TicketWindow = function() {
	let cash = 0
	let availableTickets = {}
	let soldTickets = {}

	this.cash = () => cash
	this.availableTickets = () => Object.assign({}, availableTickets)
	this.soldTickets = () => Object.assign({}, soldTickets)
	this.createEvent = (ticketName, ticketPrice) => {
		if (typeof ticketPrice !== 'number') {
			throw 'Ticket price argument must be a number'
		}

		availableTickets[ticketName] = ticketPrice
	}
	this.buyTicket = (ticketName) => {
		let price = availableTickets[ticketName]
		if (price) {
			let ticketId = Math.floor(Math.random() * 900000) + 100000
			cash += price
			soldTickets[ticketId] = ticketName
			return ticketId
		}
	}
	this.returnTicket = (ticketId) => {
		let id = parseInt(ticketId)
		let ticketName = soldTickets[id]
		if (ticketName) {
			cash -= availableTickets[ticketName]
			delete soldTickets[id]
			return availableTickets[ticketName]
		}
	}
}
