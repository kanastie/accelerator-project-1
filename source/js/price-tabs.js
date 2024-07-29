const block = document.querySelector('.price');
const tabButtons = block.querySelectorAll('.price__tab');
const tabItems = block.querySelectorAll('.price__content');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {

    let currentButton = button;
    let tabId = currentButton.getAttribute('data-tab');
    let currentTab = document.getElementById(tabId);

    tabButtons.forEach((item) => {
      item.classList.remove('price__tab--active');
    });

    tabItems.forEach((item) => {
      item.classList.remove('price__content--active');
    });

    currentButton.classList.add('price__tab--active');
    currentTab.classList.add('price__content--active');
  });
});


