function sumAndCountOfPositives(numbers) {
	if (Array.isArray(numbers)) {
		let count = 0
		let sum = numbers.reduce((sum, number) => {
			if (typeof(number) !== 'number') {
				throw 'Array must contain only numbers'
			}

			if (number > 0) {
				count++
				return sum + number
			} else {
				return sum
			}
		}, 0)

		return { count: count, sum: sum }
	} else {
		throw 'Argument must be an Array'
	}
}
