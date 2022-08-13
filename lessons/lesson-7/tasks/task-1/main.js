function textProtection(event) {
	switch(event.type) {
		case 'copy':
			alert('Нельзя копировать текст!')
			break
		case 'cut':
			alert('Нельзя вырезать текст!')
			break
		case 'contextmenu':
			alert('Нельзя использовать контекстное меню!')
			break
	}
	event.preventDefault()
}

let testExample = document.querySelector('#test-example')
testExample.textContent = 'Практический опыт показывает, что рамки и место обучения кадров требует от нас ' +
	'системного анализа форм воздействия. Значимость этих проблем настолько очевидна, что рамки и место обучения ' +
	'кадров требует от нас анализа ключевых компонентов планируемого обновления. С другой стороны рамки и место ' +
	'обучения кадров обеспечивает широкому кругу специалистов участие в формировании соответствующих условий ' +
	'активизации. С другой стороны консультация с профессионалами из IT способствует подготовке и реализации модели ' +
	'развития. Повседневная практика показывает, что рамки и место обучения кадров позволяет оценить значение ' +
	'дальнейших направлений развитая системы массового участия.'

testExample.addEventListener('copy', textProtection)
testExample.addEventListener('cut', textProtection)
testExample.addEventListener('contextmenu', textProtection)
