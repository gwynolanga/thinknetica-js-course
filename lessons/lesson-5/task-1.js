/**
 * Реализовать структуру данных для игры в шахматы
 *
 * Фигуры:
 * 1. Пешка
 * 2. Ладья
 * 3. Слон
 * 4. Конь
 * 5. Король
 * 6. Ферзь
 *
 * У каждой фигуры есть соответствующие методы и свойства:
 * 1. Получить допустимые ходы
 * 2. Содержит свойство своего цвета
 * 3. Для пешек присутствует флаг говорящий о том, что пешку можно превратить в любую другую фигуру, кроме короля
 *
 * Общие методы и свойства должны быть вынесены в родительский класс единый для всех фигур
 *
 * Поле:
 * 1. Содержит координаты всех полей и состояние всего поля
 * 2. Содержит информацию о расположении всех фигур
 *
 * Игра:
 * Состояние игры: победа белого, победа черного, игра продолжается.
 *
 * Хранит информацию о:
 * 1. Список фигур, которые были убиты
 * 2. Чей сейчас ход
 * 3. Сколько ходов прошло с начала игры
 * 4. Всю историю ходов
 *
 * В этом задании не нужно реализовывать сам механизм игры, а только соотвествующие классы, их свойства и методы
 */

class ChessPiece {
	constructor(color) {
		this._color = color;
	}
	get color() {
		return this._color
	}
	showMoves() {
		console.log('Available moves...')
	}
}

class King extends ChessPiece {
	constructor(color) {
		super(color);
	}
}

class Queen extends ChessPiece {
	constructor(color) {
		super(color);
	}
}

class Rook extends ChessPiece {
	constructor(color) {
		super(color);
	}
}

class Bishop extends ChessPiece {
	constructor(color) {
		super(color);
	}
}

class Knight extends ChessPiece {
	constructor(color) {
		super(color);
	}
}

class Pawn extends ChessPiece {
	constructor(color) {
		super(color);
		this._promotable = true
	}
	get promotable() {
		return this._promotable
	}
}

class ChessBoard {
	static promotions = [Queen, Rook, Bishop, Knight]

	constructor() {
		this._cells = {
			a: new Array(8),
			b: new Array(8),
			c: new Array(8),
			d: new Array(8),
			e: new Array(8),
			f: new Array(8),
			g: new Array(8),
			h: new Array(8)
		}
	}
	get cells() {
		return this._cells
	}
	getPiece(cell) {
		let [row, col] = [cell[0].toLowerCase(), Number(cell[1]) - 1]
		return this.cells[row][col]
	}
	setPiece(cell, piece) {
		let [row, col] = [cell[0].toLowerCase(), Number(cell[1]) - 1]
		this.cells[row][col] = piece
	}
	getCell(piece) {
		for (let [key, value] of Object.entries(this.cells)) {
			let [row, col] = [key, value.indexOf(piece) + 1]
			if (col > 0) {
				return [row, col].join('')
			}
		}
	}
	promote(pawn, promotion) {
		if (pawn.promotable && ChessBoard.promotions.includes(promotion)) {
			let newPiece = new promotion(pawn.color)
			this.setPiece(this.getCell(pawn), newPiece)
			return newPiece
		}
	}
}


class Game {
	constructor(board) {
		this._board = board
		this._status = 'active'
		this._playerMove = 'white'
		this._moveHistory = []
		this._lostPieces = []
	}
	get status() {
		return this._status
	}
	moveCount() {
		return this._moveHistory.length
	}
	move(startCell, endCell) {
		if (this.status !== 'active') {
			return undefined
		}

		let currentPiece = this._board.getPiece(startCell)
		let enemyPiece = this._board.getPiece(endCell)
		let separator = '—'
		let pieceSymbol = currentPiece.constructor.name[0]

		if (currentPiece instanceof Knight) {
			pieceSymbol = 'N'
		} else if (currentPiece instanceof Pawn) {
			pieceSymbol = ''
		}

		if (enemyPiece) {
			this._lostPieces.push(enemyPiece)
			separator = ':'
		}

		this._board.setPiece(startCell, undefined)
		this._board.setPiece(endCell, currentPiece)
		this._moveHistory.push(pieceSymbol + startCell + separator + endCell)
		this._playerMove = this._playerMove === 'white' ? 'black' : 'white';
	}
	calculateStatus() { console.log('Calculating status game...') }
}


let board = new ChessBoard()
let game = new Game(board)

let whitePawn = new Pawn('white')
let blackRook = new Rook('black')

board.setPiece('e2', whitePawn)
board.setPiece('h8', blackRook)

game.move('e2', 'e4')
game.move('h8', 'a8')
game.move('e4', 'e5')
game.move('a8', 'a1')

game.moveCount()
game.calculateStatus()
