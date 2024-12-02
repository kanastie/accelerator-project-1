const accordions = document.querySelectorAll('.tabs__content > li');

if (accordions) {

  const openAccordion = (accordion) => {
    const content = accordion.querySelector('p');
    const svg = accordion.querySelector('svg');
    const icon = accordion.querySelector('use');

    accordion.classList.add('data-open');
    content.style.opacity = '100';
    content.style.maxHeight = '100%';
    icon.setAttribute('href', '/__spritemap#sprite-minus');
    svg.setAttribute('stroke', '#ffffff');

    if (window.screen.width < 767) {
      content.style.paddingTop = '20px';
    } else if (window.screen.width >= 768) {
      content.style.paddingTop = '10px';
    } else if (window.screen.width >= 1366) {
      content.style.paddingTop = '23px';
    }
  };

  const closeAccordion = (accordion) => {
    const content = accordion.querySelector('p');
    const svg = accordion.querySelector('svg');
    const icon = accordion.querySelector('use');

    accordion.classList.remove('data-open');
    content.style.opacity = '0';
    content.style.maxHeight = '0';
    content.style.paddingTop = '0';
    icon.setAttribute('href', '/__spritemap#sprite-plus');
    svg.setAttribute('stroke', '#1c3374');
  };

  openAccordion(accordions[0]);

  accordions.forEach((accordion) => {
    const question = accordion.querySelector('div');
    const content = accordion.querySelector('p');

    question.addEventListener('click', () => {
      if (content.style.maxHeight === '100%') {
        closeAccordion(accordion);
      } else {
        openAccordion(accordion);
      }
    });
  });
}
