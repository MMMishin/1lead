import {Swiper, Mousewheel, Keyboard, Navigation, EffectFade} from 'swiper';
Swiper.use([Mousewheel, Keyboard, Navigation, EffectFade])

document.addEventListener('DOMContentLoaded', () => {
	
	// Настройки слайдера
	new Swiper('.main-slider', {
		direction: 'vertical',
		speed: 500,
		mousewheel: {
			invert: false,
		},
		keyboard: {
			enabled: true,
			onlyInViewport: false,
		},
		allowTouchMove: true,
		navigation: {
			prevEl: '.arrowUp',
			nextEl: '.arrowBottom',
		},
		breakpoints: {
			// when window width is >= 993px
			993: {
				allowTouchMove: false,
			}
		}
	})

	// Открывающиеся таблицы
	const table = document.querySelector('#nutraTable')
	const table2 = document.querySelector('#fizaTable')
	const openTableBtn = document.querySelector('#nutra')
	const openTableBtn2 = document.querySelector('#fiza')
	const closeTableBtn = document.querySelector('#cross1')
	const closeTableBtn2 = document.querySelector('#cross2')

	openTableBtn.addEventListener('click', () => {
		table.classList.add('table--open')
	})

	openTableBtn2.addEventListener('click', () => {
		table2.classList.add('table--open')
	})

	closeTableBtn.addEventListener('click', () => {
		table.classList.remove('table--open')
		
	})

	closeTableBtn2.addEventListener('click', () => {
		table2.classList.remove('table--open')
	})

	// Прелоадер отправки формы
	const submitFormBtn = document.querySelector('#submitForm')
	const preloader = document.querySelector('#preloader')
	const form = document.querySelector('.reg__form')

	form.addEventListener('submit', () => {
		preloader.classList.add('preloader--active')
	})

})