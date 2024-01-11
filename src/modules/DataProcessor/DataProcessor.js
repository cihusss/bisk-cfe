export const mainData = {};

export const getUserAgent = () => {
  console.log('userAgent', navigator.userAgent);
  mainData.userAgent = navigator.userAgent;
};

export const sendToServer = () => {
  console.log(`\nSEND TO SERVER ------------------------->`);
  console.log(mainData);
  fetch('https://labs.bisk.com', {
    method: 'POST',
    body: JSON.stringify(mainData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      console.log('response', response);
      return response.json();
    })
    .then((json) => {
      console.log('json', json);
    })
    .catch((err) => {
      console.log('err', err);
    });
};

export const getFormData = (e) => {
  MktoForms2.whenReady(function (form) {
    form.onSuccess(function (values, followUpUrl) {
      const formVals = form.vals();
      // console.log('formVals: ', formVals);
      mainData.formData = formVals;
      sendToServer();
    });
  });
};
