const section = document.querySelector('.price__container');
const cards = section.querySelectorAll('.price__item');
const priceWrappersList = document.querySelectorAll('.price__price-wrapper');

const addBorder = () => {
  cards.forEach((card) => {
    card.addEventListener('mouseover', () => {
      card.style.border = '7px solid';
      card.style.borderImageSlice = '7';
      card.style.borderImageSource = 'linear-gradient(148.82deg, #d10a42 0.85%, #00359f 100%)';
    });

    card.addEventListener('mouseout', () => {
      card.style.border = '7px solid #ffffff';
    });
  });
};

const setPriceShadow = () => {
  priceWrappersList.forEach((el) => {

    const text = el.querySelector('span').textContent;
    let newAttr = '';
    newAttr = text.replaceAll(' ', '');
    el.dataset.price = newAttr;
  });
};

export {addBorder, setPriceShadow};
