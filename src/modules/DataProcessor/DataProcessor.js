export const mainData = {};

export const getUserAgent = () => {
  console.log('userAgent', navigator.userAgent);
  mainData.userAgent = navigator.userAgent;
};

export const printData = () => {
  console.log(mainData);
};

export const sendToServer = () => {
  console.log(`\nSENDING TO SERVER ------------------------->`);

  fetch('https://labs.bisk.com', {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify(mainData),
    headers: { 'Content-Type': 'application/json' },
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
  try {
    MktoForms2.whenReady(function (form) {
      form.onSuccess(function (values, followUpUrl) {
        const formVals = form.vals();
        // console.log('formVals: ', formVals);
        mainData.formData = formVals;
        sendToServer();
      });
    });
  } catch (err) {
    console.log('err', err);
  } finally {
    console.log(mainData);
  }
};
