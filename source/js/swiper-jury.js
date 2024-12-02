import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

export const swiperJury = new Swiper('.swiper--jury', {
  modules: [Navigation],

  loop: true,

  navigation: {
    nextEl: '.persons__slider-button--next',
    prevEl: '.persons__slider-button--prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
      touchRatio: 0,
    },
  },
});
