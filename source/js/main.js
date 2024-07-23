// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';

import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const swiper = new Swiper('.swiper', {

  modules: [Navigation],

  loop: true,
  // resizeObserver: false,
  // slidesPerView: auto,

  navigation: {
    nextEl: '.persons__slider-button-next',
    prevEl: '.persons__slider-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      // width: 560,

    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
      touchRatio: 0,
    }
  },

});


