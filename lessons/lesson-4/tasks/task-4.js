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

const Shipyard = function(shipyard) {
	this.type = shipyard.type

	this.build = (ship) => {
		if (this.type === 'MotorShipyard' && ship.type === 'MotorShip') {
			return new MotorShip(ship)
		} else if (this.type === 'SailingShipyard'  && ship.type === 'SailingShip') {
			return new SailingShip(ship)
		}
	}
	this.repair = (ship) => {
		if (this.type === 'MotorShipYard' || this.type === 'SailingShipShipYard') {
			ship.lastRepairAt = new Date()
		}
	}
	this.recolor = (ship, color) => {
		ship.color = color
	}
	this.exchange = (oldShip, newShip) => {
		if (this.type === 'MotorShipyard' && oldShip.type === newShip.type) {
			return new MotorShip(newShip)
		} else if (this.type === 'SailingShipyard' && oldShip.type === newShip.type) {
			return new SailingShip(newShip)
		}
	}
}

const MotorShipyard = function(motorShipyard) {
	Object.setPrototypeOf(this, new Shipyard(motorShipyard))
}

const SailingShipyard = function(sailingShipyard) {
	Object.setPrototypeOf(this, new Shipyard(sailingShipyard))
}

const Ship = function(ship) {
	this.name = ship.name
	this.type = ship.type
	this.color = ship.color
	this.lastRepairAt = new Date()
}

const MotorShip = function(ship) {
	Object.setPrototypeOf(this, new Ship(ship))
	this.enginePower = ship.enginePower
	this.bodyMaterial = ship.bodyMaterial
}

const SailingShip = function(ship) {
	Object.setPrototypeOf(this, new Ship(ship))
	this.mastCount = ship.mastCount
	this.sailArea = ship.sailArea
}


motoShipyard = { type: 'MotorShipyard' }
sailingShipyard = { type: 'SailingShipyard' }

motoShip1 = { name: 'Moto1', type: 'MotorShip', color: 'Yellow', enginePower: 50, bodyMaterial: 'Titan' }
motoShip2 = { name: 'Moto2', type: 'MotorShip', color: 'Red', enginePower: 10, bodyMaterial: 'Iron' }
sailingShip1 = { name: 'Sail1', type: 'SailingShip', color: 'Blue', mastCount: 5, sailArea: 10 }
sailingShip2 = { name: 'Sail2', type: 'SailingShip', color: 'Orange', mastCount: 15, sailArea: 30 }
