/**
 * Написать собственную простую реализацию, которая будет соответствовать следующим требованиям:
 * 1. Промис создаётся конструктором в состоянии pending
 * 2. Промис может быть переведён в состояние fulfilled или rejected необратимо,
 * 		т.е. промис который поменял состояние один раз, не может менять его дальше
 * 3. Можно добавить новые обработчики в уже исполненный промис
 * 4. Можно создать уже выполненный промис с помощью CustomPromise.resolve/reject
 *
 * Важный нюанс: Промис должен работать асинхронно, для реализации этого можно использовать
 * setTimeout c нулевой задержкой
 */

class CustomPromise {
	constructor(executor) {
		this.#state = 'pending'
		this.#result = undefined
		this.#thenCallBacks = []
		this.#catchCallBacks = []

		try {
			executor(this.#resolve.bind(this), this.#reject.bind(this))
		} catch (error) {
			this.#reject(error)
		}
	}

	static resolve(value) {
		if (value instanceof CustomPromise) {
			return new CustomPromise(resolve => resolve(value.#result))
		}

		if (typeof value.then === 'function') {
			return new CustomPromise(value.then)
		}

		return new CustomPromise((resolve) => { resolve(value) })
	}

	static reject(error) {
		return new CustomPromise((_, reject) => { reject(error) })
	}

	then(thenCallback, catchCallback) {
		return new CustomPromise((resolve, reject) => {
			if (this.#state === 'pending') {
				if (thenCallback) {
					this.#thenCallBacks.push(() => {
						try {
							resolve(thenCallback(this.#result))
						} catch (error) {
							reject(error)
						}
					})
				}

				if (catchCallback) {
					this.#catchCallBacks.push(() => {
						try {
							reject(catchCallback(this.#result))
						} catch (error) {
							reject(error)
						}
					})
				}
			}

			if (thenCallback && this.#state === 'fulfilled') {
				try {
					resolve(thenCallback(this.#result))
				} catch (error) {
					reject(error)
				}
			}

			if (catchCallback && this.#state === 'rejected') {
				try {
					reject(catchCallback(this.#result))
				} catch (error) {
					reject(error)
				}
			}
		})
	}

	catch(callback) {
		return this.then(null, callback)
	}

	#state
	#result
	#thenCallBacks
	#catchCallBacks

	#resolve(value) {
		if (this.#state === 'pending') {
			this.#state = 'fulfilled'
			this.#result = value
			this.#thenCallBacks.forEach((callback) => callback(value))
		}
	}

	#reject(error) {
		if (this.#state === 'pending') {
			this.#state = 'rejected'
			this.#result = error
			this.#catchCallBacks.forEach((callback) => callback(error))
		}
	}
}
