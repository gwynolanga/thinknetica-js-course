// Реализовать функцию для перемешивания элементов массива

function shuffle(array) {
	return [...array].sort(() => 0.5 - Math.random());
}
