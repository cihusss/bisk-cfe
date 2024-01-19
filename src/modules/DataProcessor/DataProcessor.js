export const mainData = {};

// Define utmParameters array
const utmParameters = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'campaignid',
  'vendorid',
  'device',
  'utm_content',
  'utm_term',
  'utm_matchtype',
];

export const getUserAgent = () => {
  console.log(`\nUSER AGENT EXTRACTOR ------------------------->`);
  console.log('userAgent: ', navigator.userAgent);
  mainData.userAgent = navigator.userAgent;
};

export const printData = () => {
  console.log('\n' + mainData);
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
        mainData.event = 'MarketoFormSubmit';

        // Instantiate URLSearchParams object
        utmParameters.forEach((parameter) => {
          if (localStorage.getItem(parameter) !== null) {
            console.log(`${parameter} EXISTS in localStorage!`);
            // mainData['utmParameters'][parameter] = {
            //   utm: localStorage.getItem(parameter),
            //   label: parameter,
            // };
            // mainData[parameter] = localStorage.getItem(parameter);
            mainData['utmParameters'][parameter] =
              localStorage.getItem(parameter);
          } else {
            console.log(`No ${parameter} in localStorage!`);
          }
        });

        sendToServer();
      });
    });
  } catch (err) {
    console.log('err', err);
  } finally {
    console.log(mainData);
  }
};
