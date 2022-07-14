/**
 * Создать объект human со следующими возможностями:
 * 1. При записи значения в свойство fullName имя и фамилия должны записываться в отдельные свойства
 * firstName и lastName
 * 2. При чтении значения fullName оно должно получаться из объединения firstName и lastName
 * 3. При задании значения свойства dateOfBirth должно так же устанавливаться свойство age в зависимости
 * от разницы года рождения и текущего года
 */

const human = Object.create({}, {
	fullName: {
		get() {
			return [this.firstName, this.lastName].filter(Boolean).join(' ')
		},
		set(value) {
			[this.firstName, this.lastName] = value.split(' ')
		}
	},
	dateOfBirth: {
		get() {
			return this._dateOfBirth
		},
		set(value) {
			this._dateOfBirth = value
			this.age = new Date().getFullYear() - new Date(value).getFullYear()
		}
	}
});
