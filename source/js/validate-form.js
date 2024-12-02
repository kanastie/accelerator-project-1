const formSection = document.querySelector('.form');
const form = formSection.querySelector('form');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (checkValidtion(form) === true) {
    form.querySelector('.form__modal').style.display = 'block';

    setTimeout(() => {
      form.querySelector('.form__modal').style.display = 'none';
    }, 2000);

    form.reset();
  }
});

function checkValidtion (el) {
  let result = true;

  const inputsList = el.querySelectorAll('input');

  inputsList.forEach((input) => {

    removeError(input);

    if (!input.value) {
      createError(input, 'Поле не заполнено');
      result = false;

    } else {

      if (input.dataset.formName) {
        if (checkPattern(input) === false) {
          createError(input, 'Имя состоит из букв');
          result = false;
        }
      }

      if (input.dataset.formPhone) {
        if (checkPattern(input) === false) {
          createError(input, 'Номер состоит из цифр и длинее 7');
          result = false;
        }
      }
    }
    return result;
  });
  return result;
}

function createError (input, text) {
  const parent = input.parentNode;
  parent.classList.add('error');
  const errorMessage = document.createElement('span');
  errorMessage.className = 'form__error';
  errorMessage.textContent = text;
  parent.insertBefore(errorMessage, input);
  errorMessage.style.display = 'block';
}

function removeError (input) {
  const parent = input.parentNode;
  if (parent.classList.contains('error')) {
    parent.querySelector('.form__error').remove();
    parent.classList.remove('error');
  }
}

function checkPattern (input) {
  if (!input.validity.valid) {
    return false;
  }
}
