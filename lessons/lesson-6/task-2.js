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

// https://stackoverflow.com/questions/203739/why-does-instanceof-return-false-for-some-literals
function createNestedList(items) {
	if (items instanceof Array) {
		let ul = document.createElement('ul')

		items.forEach((item) => {
			if (item instanceof Array) {
				ul.append(createNestedList(item))
			} else {
				let li = document.createElement('li')
				li.textContent = item
				ul.append(li)
			}
		})

		return ul
	}
}
