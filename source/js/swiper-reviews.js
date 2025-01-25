import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const setSwiperReviews = () => {
  const swiperreviews = new Swiper('.swiper--reviews', {
    modules: [Navigation],

    loop: false,
    slidesPerView: 1,
    spaceBetween: 40,

    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },

    breakpoints: {
      1366: {
        touchRatio: 0,
        width: 560,
      },
    },
  });
}

export {setSwiperReviews};
