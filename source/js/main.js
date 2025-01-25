import {setSwiperJury} from './swiper-jury';
import {setSwiperReviews} from './swiper-reviews';
import {createAccordion} from './faq-accordion';
import {createFaqTabsToggle} from './faq-tabs';
import {createPriceTabsToggle} from './price-tabs';
import {playVideo} from './about-video';
import {setUserFormSubmit} from './validate-form';
import {addBorder, setPriceShadow} from './price-cards';

playVideo();
addBorder();
setPriceShadow();
createPriceTabsToggle();
createFaqTabsToggle();
createAccordion();
setSwiperJury();
setSwiperReviews();
setUserFormSubmit();
