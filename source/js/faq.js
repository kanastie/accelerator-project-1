const tabContainer = document.querySelectorAll('.tabs__content');

tabContainer.forEach((button) => {
  button.addEventListener('click', (evt) => {

    const item = evt.target.closest('details');

    if (item.hasAttribute('open')) {
      item.removeAttribute('open');
    } else {
      item.setAttribute('open', '');
    }
  });
});
