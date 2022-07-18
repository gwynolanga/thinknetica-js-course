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
	let ticketId = 0
	let amount = 0
	let availableTickets = []
	let soldTickets = []

	this.amount = () => amount
	this.availableTickets = () => {
		return availableTickets.map((availableTicket) => ({ name: availableTicket.name, price: availableTicket.price }))
	}
	this.soldTickets = () => {
		return soldTickets.map((soldTicket) => {
			return { id: soldTicket.id, ticket: { name: soldTicket.ticket.name, price: soldTicket.ticket.price } }
		})
	}
	this.createEvent = (name, price) => {
		let availableTicket = availableTickets.find((ticket) => ticket.name === name)
		if (availableTicket) {
			availableTicket.price = price
		} else {
			availableTickets.push({ name: name, price: price })
		}
	}
	this.buyTicket = (ticketName) => {
		let availableTicket = availableTickets.find((ticket) => ticket.name === ticketName)
		if (availableTicket) {
			ticketId++
			amount += availableTicket.price
			soldTickets.push({ id: ticketId, ticket: availableTicket })
			return ticketId
		}
	}
	this.returnTicket = (ticketId) => {
		let soldTicket = soldTickets.find((ticket) => ticket.id === parseInt(ticketId))
		if (soldTicket) {
			amount -= soldTicket.ticket.price
			soldTickets = soldTickets.filter((ticket) => ticket.id !== parseInt(ticketId))
		}
	}
}
