/**
 * С помощью прототипа реализовать структуру "Квадрат" которая будет наследоваться от структуры "Прямоугольник",
 * должна быть возможность задавать размеры обеим фигурам и получать их площадь и периметр.
 */

const Rectangle = function(width, height) {
	this.width = width
	this.height = height
	this.perimeter = () => (2 * (this.width + this.height))
	this.area = () => (this.width * this.height)
}

const Square = function(size) {
	Rectangle.call(this, size, size)
}

Object.setPrototypeOf(Square.prototype, Rectangle.prototype)
