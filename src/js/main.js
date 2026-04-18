import Swiper from 'swiper';

import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "/src/sass/style.scss";


const burger = document.querySelector('.nav__burger');
const burgerMenu = document.querySelector('.nav__menu');
const buttons = document.querySelector('.nav-cta');
const nav = document.querySelector('.nav');

// burger.addEventListener('click', () => {
//     burger.classList.toggle('nav__burger_active');
//     burgerMenu.classList.toggle('nav__menu_active');
//     buttons.classList.toggle('nav-cta_active');
//     nav.classList.toggle('nav_active');
// })

const NAV_UNFOLD_MS = 180;
const MENU_SLIDE_MS = 200;
const CTA_SLIDE_MS = 130;

let isOpen = false;
let isAnimating = false;

if (burger && burgerMenu && buttons && nav) {
	burger.addEventListener('click', () => {
		if (isAnimating) return;
		isAnimating = true;

		if (!isOpen) {
			burger.classList.add('nav__burger_active');
			nav.classList.add('nav_active');

			setTimeout(() => {
				burgerMenu.classList.add('nav__menu_active');
			}, NAV_UNFOLD_MS);

			setTimeout(() => {
				buttons.classList.add('nav-cta_active');
				isOpen = true;
				isAnimating = false;
			}, NAV_UNFOLD_MS + MENU_SLIDE_MS);

			return;
		}

		// Close in reverse: CTA out -> menu out -> nav wraps up.
		buttons.classList.remove('nav-cta_active');

		setTimeout(() => {
			burgerMenu.classList.remove('nav__menu_active');
		}, CTA_SLIDE_MS);

		setTimeout(() => {
			nav.classList.remove('nav_active');
			burger.classList.remove('nav__burger_active');
			isOpen = false;
			isAnimating = false;
		}, CTA_SLIDE_MS + MENU_SLIDE_MS);
	});
}

const swiper = new Swiper('.trust__companies', {

  modules: [Navigation, Pagination],
  loop: true,
});
