export const mainData = {};

export const getUserAgent = () => {
  console.log('userAgent', navigator.userAgent);
  mainData.userAgent = navigator.userAgent;
};

export const sendToServer = () => {
  console.log(`\nSEND TO SERVER ------------------------->`);
  console.log(mainData);
};

export const getFormData = (e) => {
  MktoForms2.whenReady(function (form) {
    form.onSuccess(function (values, followUpUrl) {
      const formVals = form.vals();
      console.log('formVals: ', formVals);
      mainData.formData = formVals;
      sendToServer();
    });
  });
};
