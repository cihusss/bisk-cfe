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
  mainData.client_user_agent = navigator.userAgent;
};

export const getHostname = () => {
  mainData.hostname = window.location.host;
};

export const getMetaCookies = () => {
  metaCookies.forEach((metaCookie) => {
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
      mainData.client_ip_address = jsonResponse.ip;
      mainData.city = jsonResponse.city;
      mainData.state = jsonResponse.region;
      mainData.zip_code = jsonResponse.postal;
      mainData.country = jsonResponse.country;
    });
};

export const getSourceUrl = () => {
  mainData['event_source_url'] = window.location.href;
};

export const getGoogleData = () => {};

export const printData = () => {};

export const sendToServer = () => {
  let server_base_url = '';
  let server_route = '';
  if (window.location.href.includes('localhost')) {
    server_base_url = 'http://localhost:3000';
  } else {
    server_base_url = 'https://labs.bisk.com';
  }
  if (mainData.gclid !== '' || mainData.wbraid !== '' || mainData.gbraid !== '') {
    server_route = '/google';
  } else {
    server_route = '/capi';
  }

  fetch(`${server_base_url}${server_route}`, {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify(mainData),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      // console.log('json', json);
    })
    .catch((err) => {
      // console.log('err', err);
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
        mainData.event_name = 'MarketoFormSubmit';
        // Populate mainData with utmParameters from localStorage
        utmParameters.forEach((parameter) => {
          if (localStorage.getItem(parameter) !== null) {
            // console.log(`${parameter} EXISTS in localStorage!`);
            mainData.utmParameters = {
              ...mainData.utmParameters,
              [parameter]: localStorage.getItem(parameter),
            };
          } else {
            // console.log(`No ${parameter} in localStorage!!`);
          }
        });
        // Send mainData to server
        sendToServer();
      });
    });
  } else {
    // console.log('MktoForms2 not defined');
  }
};
