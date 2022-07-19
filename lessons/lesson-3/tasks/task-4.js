/**
 * Система продажи билетов
 *
 * Реализовать систему продажи билетов, которая позволит продавать билеты и возвращать их.
 *
 * Пример:
 * // создаем концерт и указываем цену билетов
 * ticketWindow.createEvent('Concert', 500)
 *
 * // Добавляем сумму за билет в кассу, возвращаем случайный шестизначный ID билета, создать ID можно любым способом
 * ticketWindow.buyTicket('Concert')
 *
 * // Возвращаем билет, если в системе такой id записан как проданный, он должен быть удален из списка проданных
 * // и из кассы должна быть вычтена соответствующая его цене сумма
 * ticketWindow.returnTicket('123456')
 */

const TicketWindow = function() {
	let cash = 0
	let availableTickets = {}
	let soldTickets = {}

	this.cash = () => cash
	this.availableTickets = () => Object.assign({}, availableTickets)
	this.soldTickets = () => Object.assign({}, soldTickets)
	this.createEvent = (ticketName, price) => {
		availableTickets[ticketName] = price
	}
	this.buyTicket = (ticketName) => {
		let price = availableTickets[ticketName]
		if (price) {
			let ticketId = Math.floor(Math.random() * 900000) + 100000
			cash += price
			soldTickets[ticketId] = ticketName
			return ticketId
		}
	}
	this.returnTicket = (ticketId) => {
		let id = parseInt(ticketId)
		let ticketName = soldTickets[id]
		if (ticketName) {
			cash -= availableTickets[ticketName]
			delete soldTickets[id]
			return availableTickets[ticketName]
		}
	}
}
