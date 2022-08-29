describe('sumAndCountOfPositives', () => {
	it('return an object that contains the sum and quantity of positive numbers', () => {
		const numbers = [-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]
		const expected = { count: 5, sum: 357 }
		assert.deepEqual(sumAndCountOfPositives(numbers), expected)
	})

	it('return an exception for wrong argument', () => {
		const numbers = undefined
		const expected = 'Argument must be an Array'
		assert.throws(() => sumAndCountOfPositives(numbers), expected)
	})

	it('return an exception for wrong array items', () => {
		const numbers = ['hello', 'world']
		const expected = 'Array must contain only numbers'
		assert.throws(() => sumAndCountOfPositives(numbers), expected)
	})
})
