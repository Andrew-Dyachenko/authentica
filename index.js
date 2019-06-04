import jQuery from 'jquery'
import 'slick-carousel'
import 'svgxuse'
import './assets/js/array.from.polyfill'
// import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/popover'

/**
 * Добавляет недостоющую высоту блоку .container--main в случае если
 * недостаточная высота контента и footer не был прижат к низу.
 * Этот пример актуален для IE11, где не срабатывает свойство flex-grow: 1
 * для .container--main
 */
const footerToBottom = () => {
	const bodyContainers = document.querySelectorAll('body > .container');
	const mainContainer = document.querySelector('.container--main');
	const f = () => {
		const totalHeight = Array.from(bodyContainers)
			.reduce((reduced, container) =>
				reduced + container.offsetHeight, 0)

		mainContainer.style.minHeight = totalHeight < window.innerHeight
			? `${window.innerHeight - totalHeight}px`
			: 'auto'
	}

	window.addEventListener('resize', () => {
		mainContainer.style.minHeight = null
		f()
	})
}

const subscribeHandler = e => {
	e.preventDefault()
	const form = e.target
	const input = e.target.elements[0]
	const submit = e.target.elements[1]
	const help = form.querySelector('.subscribe__help')

	if (form.checkValidity()) {
		input.value = null
		input.setAttribute('disabled', true)
		submit.setAttribute('disabled', true)
		help.classList.remove('subscribe__help--error')
		help.innerText = 'Вы успешно подписаны!'
	}
	else {
		help.classList.add('subscribe__help--error')
		help.innerText = 'Email введен неверно'
	}
}

document.addEventListener('DOMContentLoaded', () => {
	footerToBottom()
	document.getElementsByName('subscribe-form')[0].onsubmit = subscribeHandler
	jQuery('[data-toggle="popover"]').popover({
		container: jQuery('#banner'),
		html: true
	})
	jQuery('.banner__popover-pointer--nail, .banner__popover-pointer--lips').popover('show')
	jQuery('.lean-slider__container').each(function () {
		const slider = jQuery(this)
		const actions = slider.parent('.lean-slider').find('.lean-slider__actions').eq(0)
		const prevArrow = actions.find('.lean-slider__action--previous').eq(0)
		const nextArrow = actions.find('.lean-slider__action--forward').eq(0)
		const scoreboard = slider.parent('.lean-slider').find('.lean-slider__scoreboard').eq(0)
		const scoreboardCurrent = scoreboard.find('.lean-slider__scoreboard-current').eq(0)
		const scoreboardTotal = scoreboard.find('.lean-slider__scoreboard-total').eq(0)

		slider.on('init', (event, slick) => {
			const { currentSlide, slideCount } = slick
			scoreboardCurrent.text(currentSlide + 1)
			scoreboardTotal.text(slideCount)
		})

		slider.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
			scoreboardCurrent.text(nextSlide + 1)
		})

		slider.on('afterChange', (event, slick, currentSlide) => {
			scoreboardCurrent.text(currentSlide + 1)
		})

		slider.slick({
			lazyLoad: 'progressive',
			appendArrows: actions,
			prevArrow,
			nextArrow,
			infinite: false,
			centerMode: true,
			centerPadding: 0
		})
	})
})
