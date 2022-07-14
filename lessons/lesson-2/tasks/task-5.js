/**
 * Выполнить преобразования с массивом сотрудников компании:
 * const employees = [
 * 	{ firstName: 'Alex', lastName: 'Smith', age: 54, salary: 10000, position: 'Architect' },
 * 	{ firstName: 'Gustav', lastName: 'Andersen', age: 31, salary: 5000, position: 'Software engineer' },
 * 	{ firstName: 'Liz', lastName: 'Taylor', age: 20, salary: 7000, position: 'Manager' }
 *
 * 1. Узнать среднюю зарплату сотрудников
 * 2. Отсортировать сотрудников по зарплате
 * 3. Получить список сотрудников с зарплатой >4500 и возрастом > 25 лет
 */

function avgSalary(employees) {
	let amount = employees.reduce((acc, employee) => (acc + employee.salary), 0);
	return amount / employees.length;
}

function sortBySalary(employees) {
	return employees.sort((employee1, employee2) => (employee1.salary - employee2.salary));
}

function filterEmployees(employees) {
	return employees.filter((employee) => (employee.salary > 4500 && employee.age > 25));
}
