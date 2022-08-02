/**
 * Создать функцию, которая будет принимать HTML элемент и объект.
 *
 * Требуется обойти все дочерние ноды HTML элемента и у тех элементов, у которых есть атрибут data-field,
 * выставить textContent из соответствующего свойства объекта.
 *
 * В случае, если в объекте нет нужного свойства - выбросить ошибку, если в объекте есть свойство,
 * которое не используется в HTML - игнорировать.
 *
 * Пример:
 * HTML
 * <div id=”item1”>
 *   <h3 data-field=”title”>Some title</h3>
 *   <p data-field=”description”></p>
 * </div>
 *
 * JS
 * parseTemplate(
 *   document.getElementById(‘item1’),
 *   {
 *     title: ‘Hello world’,
 *     description: ‘The first program’,
 *   }
 * );
 *
 * HTML должен измениться на:
 * <div id=”item1”>
 *   <h3 data-field=”title”>Hello world</h3>
 *   <p data-field=”description”>The first program</p>
 * </div>
 */

function parseTemplate(element, data) {
	element.children.forEach((child) => {
		let key = child.dataset['field']
		let value = data[key]
		if (value) {
			child.textContent = value
		} else {
			throw `Не найдено свойство ${key}!`
		}
	})
}
