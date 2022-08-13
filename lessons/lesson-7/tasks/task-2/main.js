let formOperator = document.querySelector('.form-operator')
let calculator = document.querySelector('.calculator')
let display = calculator.querySelector('.calculator-display')
let buttons = calculator.querySelector('.calculator-buttons')

let availableOperators = {
	add: (x, y) => x + y,
	subtract: (x, y) => x - y,
	multiply: (x, y) => x * y,
	divide: (x, y) => x / y
}
let availableHotKeys = {
	'+': 'add',
	'-': 'subtract',
	'*': 'multiply',
	'/': 'divide'
}

let clickFunction = (event) => {
	if (!event.target.matches('span')) return

	let button = event.target
	let buttonValue = button.textContent
	let displayValue = display.textContent
	let { buttonType } = button.dataset
	let { previousButtonType } = calculator.dataset

	if (buttonType === 'number') {
		if (displayValue === '0' || previousButtonType === 'operator' || previousButtonType === 'equal') {
			display.textContent = buttonValue
		} else {
			display.textContent = displayValue + buttonValue
		}
	}

	if (buttonType === 'operator') {
		let { firstNumber } = calculator.dataset
		let { operator } = calculator.dataset

		if (firstNumber && operator && previousButtonType !== 'operator' && previousButtonType !== 'equal') {
			let calcNumber = calculate(firstNumber, operator, displayValue)
			display.textContent = calcNumber
			calculator.dataset.firstNumber = calcNumber
		} else {
			calculator.dataset.firstNumber = displayValue
		}

		calculator.dataset.operator = button.dataset.method
	}

	if (buttonType === 'equal') {
		let { firstNumber } = calculator.dataset
		let { operator } = calculator.dataset
		let secondNumber = displayValue

		if (firstNumber) {
			if (previousButtonType === 'equal') {
				firstNumber = displayValue
				secondNumber = calculator.dataset.modNumber
			}

			display.textContent = calculate(firstNumber, operator, secondNumber)
		}

		calculator.dataset.modNumber = secondNumber
	}

	if (buttonType === 'decimal') {
		if (previousButtonType === 'operator' || previousButtonType === 'equal') {
			display.textContent = '0' + buttonValue
		} else if (!displayValue.includes('.')) {
			display.textContent = displayValue + buttonValue
		}
	}

	if (buttonType === 'cleaning') {
		if (buttonValue === 'AC') {
			calculator.dataset.firstNumber = ''
			calculator.dataset.operator = ''
			calculator.dataset.modNumber = ''
		} else {
			button.textContent = 'AC'
		}

		display.textContent = '0'
	}

	if (buttonType !== 'cleaning') {
		buttons.querySelector('.cleaning').textContent = 'CE'
	}

	calculator.dataset.previousButtonType = buttonType
}

formOperator.addEventListener('submit', (event) => {
	event.preventDefault()
	let form = event.target

	let name = form.querySelector('input[name=operator-name]').value
	let firstArgument = form.querySelector('input[name=operator-first-argument]').value
	let secondArgument = form.querySelector('input[name=operator-second-argument]').value
	let funcBody = form.querySelector('textarea[name=operator-action]').value

	if (availableOperators[name]) {
		alert('Такой оператор уже существует!')
	} else {
		availableOperators[name] = new Function(firstArgument, secondArgument, `return ${funcBody}`)

		let span = document.createElement('span')
		span.textContent = name
		span.classList.add('calculator-item', 'new-operator')
		span.dataset.buttonType = 'operator'
		span.dataset.method = name
		span.addEventListener('click', clickFunction)
		document.querySelector('.additional-buttons').append(span)
	}
})

document.addEventListener('keydown', (event) => {
	let keyValue = event.key
	let hotKey = availableHotKeys[keyValue]
	let displayValue = display.textContent
	let { previousButtonType } = calculator.dataset

	if (Number(keyValue) >= 0) {
		if (displayValue === '0' || previousButtonType === 'operator' || previousButtonType === 'equal') {
			display.textContent = keyValue
		} else {
			display.textContent = displayValue + keyValue
		}

		calculator.dataset.previousButtonType = 'number'
	}

	if (hotKey) {
		let { firstNumber } = calculator.dataset
		let { operator } = calculator.dataset

		if (firstNumber && operator && previousButtonType !== 'operator' && previousButtonType !== 'equal') {
			let calcNumber = calculate(firstNumber, operator, displayValue)
			display.textContent = calcNumber
			calculator.dataset.firstNumber = calcNumber
		} else {
			calculator.dataset.firstNumber = displayValue
		}

		calculator.dataset.operator = hotKey
		calculator.dataset.previousButtonType = 'operator'
	}

	if (keyValue === 'Enter') {
		let { firstNumber } = calculator.dataset
		let { operator } = calculator.dataset
		let secondNumber = displayValue

		if (firstNumber) {
			if (previousButtonType === 'equal') {
				firstNumber = displayValue
				secondNumber = calculator.dataset.modNumber
			}

			display.textContent = calculate(firstNumber, operator, secondNumber)
		}

		calculator.dataset.modNumber = secondNumber
		calculator.dataset.previousButtonType = 'equal'
	}

	if (keyValue === '.') {
		if (previousButtonType === 'operator' || previousButtonType === 'equal') {
			display.textContent = '0' + keyValue
		} else if (!displayValue.includes('.')) {
			display.textContent = displayValue + keyValue
		}

		calculator.dataset.previousButtonType = 'decimal'
	}

	if (keyValue === 'Backspace') {
		display.textContent = displayValue.length === 1 ? '0' : displayValue.slice(0, -1)

		if (displayValue.length === 1) {
			display.textContent = '0'
			buttons.querySelector('.cleaning').textContent = 'AC'
			calculator.dataset.previousButtonType = 'cleaning'
		} else {
			display.textContent = displayValue.slice(0, -1)
		}
	}

	if (keyValue !== 'Backspace') {
		buttons.querySelector('.cleaning').textContent = 'CE'
	}
})

buttons.addEventListener('click', clickFunction)

function calculate(firstNumber, operator, secondNumber) {
	let func = availableOperators[operator]
	return func(parseFloat(firstNumber), parseFloat(secondNumber))
}
