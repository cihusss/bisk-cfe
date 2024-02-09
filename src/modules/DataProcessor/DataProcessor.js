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

const metaCookies = ['fbp', 'fbc'];

export const getUserAgent = () => {
  console.log(`\nUSER AGENT EXTRACTOR ------------------------->`);
  console.log('userAgent: ', navigator.userAgent);
  mainData.client_user_agent = navigator.userAgent;
};

export const getMetaCookies = () => {
  console.log(`\nMETA COOKIE EXTRACTOR ------------------------->`);
  metaCookies.forEach((metaCookie) => {
    console.log(metaCookie);
    mainData[metaCookie] = document.cookie
      .split('; ')
      .find((row) => row.startsWith(`_${metaCookie}=`))
      ?.split('=')[1];
  });
};

export const getIpData = () => {
  fetch('https://ipinfo.io/json?token=596e24d86147cf')
    .then((response) => response.json())
    .then((jsonResponse) => {
      console.log(jsonResponse.ip, jsonResponse.country);
      mainData.client_ip_address = jsonResponse.ip;
      mainData.city = jsonResponse.city;
      mainData.state = jsonResponse.region;
      mainData.zip_code = jsonResponse.postal;
      mainData.country = jsonResponse.country;
    });
};

export const getSourceUrl = () => {
  mainData['event_source_url'] = window.location.href;
  console.log(mainData);
};

export const printData = () => {
  console.log('\n' + mainData);
};

export const sendToServer = () => {
  console.log(`\nSENDING TO SERVER ------------------------->`);

  // const server_url = 'https://labs.bisk.com/capi';
  const server_url = 'http://127.0.0.1:3000/capi';

  fetch(server_url, {
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
  if (typeof MktoForms2 != 'undefined') {
    MktoForms2.whenReady(function (form) {
      form.onSuccess(function (values, followUpUrl) {
        const formVals = form.vals();
        // console.log('formVals: ', formVals);
        mainData.formData = formVals;
        mainData.first_name = formVals.FirstName;
        mainData.last_name = formVals.LastName;
        mainData.phone = formVals.Phone;
        mainData.email = formVals.Email;
        // mainData.client_ip_address = formVals.TCPA_IP_Address__c;
        mainData.event = 'MarketoFormSubmit';
        // Populate mainData with utmParameters from localStorage
        utmParameters.forEach((parameter) => {
          if (localStorage.getItem(parameter) !== null) {
            console.log(`${parameter} EXISTS in localStorage!`);
            mainData.utmParameters = {
              ...mainData.utmParameters,
              [parameter]: localStorage.getItem(parameter),
            };
          } else {
            console.log(`No ${parameter} in localStorage!!`);
          }
        });
        // Send mainData to server
        sendToServer();
      });
    });
  } else {
    console.log('MktoForms2 not defined');
  }
};
