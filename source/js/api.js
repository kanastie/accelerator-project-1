const BASE_URL = 'https://echo.htmlacademy.ru/';

const sendData = (body, onSuccess, onFinally) => {
  fetch(`${BASE_URL}`,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throw new Error();
      }
    })
    .catch((err) => {
      throw new Error(err);
    })
    .finally(() => {
      onFinally();
    });
};

export {sendData};
