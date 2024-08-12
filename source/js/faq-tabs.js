const block = document.querySelector('.faq');
const tabButtons = block.querySelectorAll('.tabs__button');
const tabItems = block.querySelectorAll('.tabs__content');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {

    let currentButton = button;
    let tabId = currentButton.getAttribute('data-faq-tab');
    let currentTab = document.getElementById(`faq-${tabId}`);

    tabButtons.forEach((item) => {
      item.classList.remove('tabs__button--active');
    });

    tabItems.forEach((item) => {
      item.classList.remove('tabs__content--active');
    });

    currentButton.classList.add('tabs__button--active');
    currentTab.classList.add('tabs__content--active');
  });
});
