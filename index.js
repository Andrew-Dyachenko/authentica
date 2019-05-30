import './assets/js/array.from.polyfill'
import 'bootstrap/js/dist/dropdown'

/**
 * Добавляет недостоющую высоту блоку .container--main в случае если
 * недостаточная высота контента и footer не был прижат к низу.
 * Этот пример актуален для IE11, где не срабатывает свойство flex-grow: 1
 * для .container--main
 */
const footerToBottom = () => {
	const bodyContainers = document.querySelectorAll('body > .container');
	const mainContainer = document.querySelector('.container--main');

	const totalHeight = Array.from(bodyContainers)
		.reduce((reduced, container) =>
			reduced + container.offsetHeight, 0)

	mainContainer.style.minHeight = totalHeight < window.innerHeight
		? `${window.innerHeight - totalHeight}px`
		: 'auto'

	window.addEventListener('resize', () => {
		mainContainer.style.minHeight = null
		footerToBottom()
	})
}

document.addEventListener('DOMContentLoaded', () => {
	footerToBottom()
})
