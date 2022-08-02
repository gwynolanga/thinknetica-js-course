/**
 * Реализовать функцию для отображения на экране вложенных массивов.
 *
 * Элементом массива может являться либо строка, либо массив, в случае строки нужно показать этот элемент
 * как элемент списка, в случае массива - создать новый вложенный список, например:
 * Для данных
 * const nestedList = ["Item", ["Item2", ["Item3"]]];
 *
 * Должна получиться такая структура html на выходе:
 * <ul>
 *     <li>Item</li>
 *     <ul>
 *         <li>Item2</li>
 *         <ul>
 *             <li>Item3</li>
 *         </ul>
 *     </ul>
 * </ul>
 */

function createNestedList(items) {
	if (items instanceof Array) {
		let ul = document.createElement('ul')

		items.forEach((item) => {
			if (item.constructor === String) {
				let li = document.createElement('li')
				li.textContent = item
				ul.append(li)
			} else {
				ul.append(createNestedList(item))
			}
		})

		return ul
	}
}
