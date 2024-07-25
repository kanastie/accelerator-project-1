const tabContainer = document.querySelector('.tabs__content');

tabContainer.addEventListener('click', (evt) => {

  const item = evt.target.closest('details');

  if (item.hasAttribute('open')) {
    item.removeAttribute('open');
  } else {
    item.setAttribute('open', '');
  }
});
