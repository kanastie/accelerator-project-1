import Swiper from "swiper";
import { Navigation } from "swiper/modules";

export const swiperFaq = new Swiper('.swiper--faq', {

  modules: [Navigation],

  loop: false,
  slidesPerView: 1,
  spaceBetween: 40,

  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

  breakpoints: {
    320: {
      // slidesPerView: 1,
      // width: 190,
      // spaceBetween: 40,
    },
    768: {
      // slidesPerView: 1,
    },
    1366: {
      // slidesPerView: 1,
      touchRatio: 0,
    }
  },
});
