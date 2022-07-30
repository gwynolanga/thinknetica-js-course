/**
 * Организовать такую цепочку прототипов, в которой свойства и методы оптимально распределены по объектам.
 * Есть следующее расширение объектов:
 * Человек → Сотрудник → Нынешний сотрудник/ бывший сотрудник
 *
 * Есть следующий объект, в котором свойства лежат кучей:
 * const john = {
 *   name: "John",
 *   lastName: "Smith",
 *   position: "Senior engineer",
 *   startDate: "10.10.1990",
 *   endDate: "10.10.2000",
 *   baseSalary: "10000",
 *   salaryCurrency: "$",
 *   location: "Russia",
 *   department: "IT",
 *   phoneNumber: "+1234567890",
 *   eat: function() {},
 *   sleep: function() {},
 *   callFriend: function() {},
 *   writeReport: function() {},
 *   organizeMeeting: function () {},
 *   retire: function () {},
 *   startVacation: function () {}
 * };
 */

const Human = function(human) {
	this.name = human.name
	this.lastName = human.lastName
	this.phoneNumber = human.phoneNumber
	this.eat = () => (console.log('Eating'))
	this.sleep = () => (console.log('Sleeping'))
	this.callFriend = () => (console.log('Calling and talking to a friend'))
}

const Employee = function(employee) {
	Human.call(this, employee)
	this.position = employee.position
	this.baseSalary = employee.baseSalary
	this.salaryCurrency = employee.salaryCurrency
	this.location = employee.location
	this.department = employee.department
}

const CurrentEmployee = function(currentEmployee) {
	Employee.call(this, currentEmployee)
	this.startDate = currentEmployee.startDate
	this.writeReport = () => (console.log('Writing a report'))
	this.organizeMeeting = () => (console.log('Organizing a meeting'))
	this.retire = () => (console.log('Retired'))
	this.startVacation = () => (console.log('On vacation'))
}

const FormerEmployee = function(formerEmployee) {
	Employee.call(this, formerEmployee)
	this.endDate = formerEmployee.endDate
}

Object.setPrototypeOf(Employee.prototype, Human.prototype)
Object.setPrototypeOf(CurrentEmployee.prototype, Employee.prototype)
Object.setPrototypeOf(FormerEmployee.prototype, Employee.prototype)
