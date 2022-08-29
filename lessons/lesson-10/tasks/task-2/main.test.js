// Реализовать функцию для фильтрации массива чисел по убыванию
describe('sortDesc', () => {
	it('returns an array of numbers sorted by descending', () => {
		const numbers = [-20, -10, 0, 10, 20, 30]
		const expected = [30, 20, 10, 0, -10, -20]
		assert.deepEqual(sortDesc(numbers), expected)
	})

	it('returns an exception for wrong argument', () => {
		const numbers = 'Hello World!'
		const expected = 'Argument must be an Array'
		assert.throws(() => sortDesc(numbers), expected)
	})

	it('returns an exception for wrong array items', () => {
		const numbers = [1, 'cat', 2, 'dog']
		const expected = 'Array must contain only numbers'
		assert.throws(() => sortDesc(numbers), expected)
	})
})

// Реализовать функцию для фильтрации массива по длине слов
describe('filterByLength', () => {
	it('returns an array of words filtered by length', () => {
		const words = ['lime', 'orange', 'apple', 'banana', '']
		const min = 0
		const max = 5
		const expected = ['lime', 'apple', '']
		assert.deepEqual(filterByLength(words, min, max), expected)
	})

	it('returns an exception for wrong min value', () => {
		const words = ['lime', 'orange', 'apple', 'banana', '']
		const min = undefined
		const max = 5
		const expected = 'Min argument must be a number'
		assert.throws(() => filterByLength(words, min, max), expected)
	})

	it('returns an exception for wrong max value', () => {
		const words = ['lime', 'orange', 'apple', 'banana', '']
		const min = 0
		const max = undefined
		const expected = 'Max argument must be a number'
		assert.throws(() => filterByLength(words, min, max), expected)
	})

	it('returns an exception for wrong min and max values', () => {
		const words = ['lime', 'orange', 'apple', 'banana', '']
		const min = 5
		const max = 0
		const expected = 'Min must be less than or equal to max'
		assert.throws(() => filterByLength(words, min, max), expected)
	})

	it('returns an exception for wrong argument', () => {
		const words = undefined
		const min = 0
		const max = 5
		const expected = 'Argument must be an Array'
		assert.throws(() => filterByLength(words, min, max), expected)
	})

	it('returns an exception for wrong array items', () => {
		const words = [1, 'cat', 2, 'dog']
		const min = 0
		const max = 5
		const expected = 'Array must contain only words'
		assert.throws(() => filterByLength(words, min, max), expected)
	})
})

// Кэширование
describe('cache', () => {
	it('returns a function', () => {
		const expected = cache()
		assert.typeOf(expected, 'function')
	})

	describe('calculate the power of a number', () => {
		const calculate = cache()

		it('returns a result', () => {
			const number = 3
			const degree = 3
			const expected = { value: 27, fromCache: false }
			assert.deepEqual(calculate(number, degree), expected)
		})

		it('returns a result with cache', () => {
			const number = 2
			const degree = 10
			const first_expected = { value: 1024, fromCache: false }
			const second_expected = { value: 1024, fromCache: true }
			assert.deepEqual(calculate(number, degree), first_expected)
			assert.deepEqual(calculate(number, degree), second_expected)
		})

		it('returns an exception for wrong number', () => {
			const number = undefined
			const degree = 10
			const expected = 'Number argument must be a number'
			assert.throws(() => calculate(number, degree), expected)
		})

		it('returns an exception for wrong degree', () => {
			const number = 2
			const degree = undefined
			const expected = 'Degree argument must be a number'
			assert.throws(() => calculate(number, degree), expected)
		})
	})
})

// Реализуйте функцию MoneyBox
describe('MoneyBox', () => {
	describe('addCoin', () => {
		it('accumulates an amount of coins and return undefined', () => {
			const box = new MoneyBox()
			assert.isUndefined(box.addCoin())
		})
	})

	describe('getAmount', () => {
		it('returns an amount of accumulating coins', () => {
			const box = new MoneyBox()
			assert.equal(box.getAmount(), 0)
			box.addCoin()
			box.addCoin()
			assert.equal(box.getAmount(), 2)
		})
	})
})

// Калькулятор
describe('Calculator', () => {
	describe('history', () => {
		it('returns a history of executed operations', () => {
			const calculator = new Calculator()
			const expected = [{ operation: '+', operands: [31,32] }, { operation: '-', operands: [10,2] }]
			calculator.operation('31 + 32')
			calculator.operation('10 - 2')
			assert.deepEqual(calculator.history(), expected)
		})
	})

	describe('clearHistory', () => {
		it('returns an empty history of executed operations', () => {
			const calculator = new Calculator()
			calculator.operation('31 + 32')
			calculator.operation('10 - 2')
			assert.isNotEmpty(calculator.history())

			calculator.clearHistory()
			assert.isEmpty(calculator.history())
		})
	})

	describe('operation', () => {
		const calculator = new Calculator()

		it('executes plus operation', () => {
			const expression = '31 + 32'
			const expected = 63
			assert.equal(calculator.operation(expression), expected)
		})

		it('executes minus operation', () => {
			const expression = '10 - 2'
			const expected = 8
			assert.equal(calculator.operation(expression), expected)
		})

		it('executes a non-existent operation', () => {
			const expression = '10 / 2'
			assert.isNaN(calculator.operation(expression))
		})
	})

	describe('addOperation', () => {
		it('adds a new operation to calculator and execute it', () => {
			const calculator = new Calculator()
			const name = '/'
			const func = (a, b) => a / b
			const expression = '10 / 2'
			assert.isNaN(calculator.operation(expression))
			assert.isUndefined(calculator.addOperation(name, func))
			assert.isNotNaN(calculator.operation(expression))
		})
	})
})

// Система продажи билетов
describe('TicketWindow', () => {
	describe('cash', () => {
		it('returns a default cash', () => {
			const tw = new TicketWindow()
			assert.equal(tw.cash(), 0)
		})

		it('returns a cash after buying a ticket', () => {
			const tw = new TicketWindow()
			const ticketName = 'Test concert'
			const ticketPrice = 100
			tw.createEvent(ticketName, ticketPrice)
			tw.buyTicket(ticketName)
			assert.equal(tw.cash(), 100)
		})
	})

	describe('availableTickets', () => {
		it('returns available tickets', () => {
			let tw = new TicketWindow()
			let ticketName = 'Test concert'
			let ticketPrice = 100
			tw.createEvent(ticketName, ticketPrice)
			assert.deepEqual(tw.availableTickets(), { [ticketName]: ticketPrice })
		})
	})

	describe('soldTickets', () => {
		it('returns sold tickets', () => {
			let tw = new TicketWindow()
			let ticketName = 'Test concert'
			let ticketPrice = 100
			tw.createEvent(ticketName, ticketPrice)

			let ticketId = tw.buyTicket(ticketName)
			assert.deepEqual(tw.soldTickets(), { [ticketId]: ticketName })
		})
	})

	describe('createEvent', () => {
		it('creates a new ticket', () => {
			let tw = new TicketWindow()
			let ticketName = 'Test concert'
			let ticketPrice = 100
			assert.isUndefined(tw.createEvent(ticketName, ticketPrice))
			assert.deepEqual(tw.availableTickets(), { [ticketName]: ticketPrice })
		})

		it('returns an exception for wrong ticket price', () => {
			let tw = new TicketWindow()
			let ticketName = 'Test concert'
			let ticketPrice = undefined
			let expected = 'Ticket price argument must be a number'
			assert.throws(() => tw.createEvent(ticketName, ticketPrice), expected)
		})
	})

	describe('buyTicket', () => {
		it('returns a ticket id for sold ticket', () => {
			let tw = new TicketWindow()
			let ticketName = 'Test concert'
			let ticketPrice = 100
			tw.createEvent(ticketName, ticketPrice)
			assert.isNumber(tw.buyTicket(ticketName))
		})

		it('returns undefined value for non-existent ticket name', () => {
			let tw = new TicketWindow()
			let ticketName = 'Test concert'
			let ticketPrice = 100
			tw.createEvent(ticketName, ticketPrice)
			assert.isUndefined(tw.buyTicket('Test theatre'))
		})
	})

	describe('returnTicket', () => {
		it('returns money, reduces ticket window cash and removes a sold ticket', () => {
			let tw = new TicketWindow()
			let ticketName = 'Test concert'
			let ticketPrice = 100
			tw.createEvent(ticketName, ticketPrice)

			let ticketId = tw.buyTicket(ticketName)
			assert.equal(tw.cash(), ticketPrice)
			assert.deepEqual(tw.soldTickets(), { [ticketId]: ticketName })

			let expectedPrice = tw.returnTicket(ticketId)
			assert.equal(expectedPrice, ticketPrice)
			assert.equal(tw.cash(), 0)
			assert.isEmpty(tw.soldTickets())
		})

		it('returns undefined value for non-existent ticket id', () => {
			let tw = new TicketWindow()
			let ticketName = 'Test concert'
			let ticketPrice = 100
			tw.createEvent(ticketName, ticketPrice)

			let ticketId = tw.buyTicket(ticketName)
			assert.isUndefined(tw.returnTicket(undefined))
			assert.equal(tw.cash(), ticketPrice)
			assert.deepEqual(tw.soldTickets(), { [ticketId]: ticketName })
		})
	})
})
