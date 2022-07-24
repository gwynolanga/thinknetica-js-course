/**
 * Реализовать 2 разных типа верфей, каждая из которых должна будет специализироваться на своем типе кораблей.
 * Проверка типа корабля должна осуществляться путем сравнения прототипа.
 *
 * Для моторных кораблей доступны следующие специфичные характеристики:
 * 1. Мощность двигателя
 * 2. Материал корпуса
 *
 * Для парусных кораблей доступны следующие специфичные характеристики:
 * 1. Количество мачт
 * 2. Общая площадь парусов
 *
 * Что можно делать в верфи:
 * 1. Строить корабли - только своего типа
 * 2. Ремонтировать корабли - Должен проверяться тип корабля, работать только с кораблями своего типа
 * 3. Перекрашивать корабли - Можно красить любые корабли
 * 4. Обменивать старый корабль на новый - Можно обменивать только корабли того же типа
 *
 * Главное требование: Чистый код, весь дублирующийся код для кораблей и верфей должен быть вынесен в их прототипы.
 * Задание потребует воспользоваться гуглом для решения.
 *
 * Верфи и корабли должны создаваться с помощью функций-конструкторов.
 */

const Shipyard = function(shipType) {
	let shipTypes = [Ship, MotorShip, SailingShip]
	let isValidShipType = (shipType) => (shipTypes.includes(shipType))

	this.buildShip = (params) => {
		if (isValidShipType(shipType)) {
			return new shipType(params)
		}
	}
	this.repairShip = (ship) => {
		if (ship && isValidShipType(ship.constructor)) {
			ship.lastRepairAt = new Date()
		}
	}
	this.recolorShip = (ship, color) => {
		if (ship && isValidShipType(ship.constructor)) {
			ship.color = color
		}
	}
	this.exchangeShip = (ship, params) => {
		if (ship && isValidShipType(ship.constructor)) {
			return this.buildShip(params)
		}
	}
}

const MotorShipyard = function() {
	Shipyard.call(this, MotorShip)
}
const SailingShipyard = function() {
	Shipyard.call(this, SailingShip)
}

const Ship = function(params) {
	this.name = params.name
	this.color = params.color
	this.lastRepairAt = new Date()
}

const MotorShip = function(params) {
	Ship.call(this, params)
	this.enginePower = params.enginePower
	this.bodyMaterial = params.bodyMaterial
}

const SailingShip = function(params) {
	Ship.call(this, params)
	this.mastCount = params.mastCount
	this.sailArea = params.sailArea
}

Object.setPrototypeOf(MotorShipyard.prototype, Shipyard.prototype)
Object.setPrototypeOf(SailingShipyard.prototype, Shipyard.prototype)
Object.setPrototypeOf(MotorShip.prototype, Ship.prototype)
Object.setPrototypeOf(SailingShip.prototype, Ship.prototype)

motorShip1 = { name: 'Moto1', color: 'Yellow', enginePower: 50, bodyMaterial: 'Titan' }
motorShip2 = { name: 'Moto2', color: 'Red', enginePower: 10, bodyMaterial: 'Iron' }
sailingShip1 = { name: 'Sail1', color: 'Blue', mastCount: 5, sailArea: 10 }
sailingShip2 = { name: 'Sail2', color: 'Orange', mastCount: 15, sailArea: 30 }
