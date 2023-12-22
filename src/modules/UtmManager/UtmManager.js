import { UtmHandler } from './UtmHandler';

export const UtmManager = () => {
  console.log(`\nUTM MANAGER ------------------------->`);

  // Get URL params
  const searchParams = new URLSearchParams(window.location.search);
  const utmData = {};

  utmData.medium = {
    utm: searchParams.get('utm_medium'),
    localStorage: localStorage.getItem('utm_medium'),
    label: 'utm_medium',
  };

  utmData.campaign = {
    utm: searchParams.get('utm_campaign'),
    localStorage: localStorage.getItem('utm_campaign'),
    label: 'utm_campaign',
  };

  console.log('utmData:', utmData);

  for (let key in utmData) {
    if (utmData[key].utm) {
      UtmHandler(
        utmData[key].utm,
        utmData[key].localStorage,
        utmData[key].label
      );
    }
  }
};
