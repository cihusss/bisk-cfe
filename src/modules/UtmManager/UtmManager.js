import { UtmHandler } from './UtmHandler';
import { mainData } from '../DataProcessor/DataProcessor';

export const UtmManager = () => {
  console.log(`\nUTM MANAGER ------------------------->!`);

  // Instantiate URLSearchParams object
  const searchParams = new URLSearchParams(window.location.search);
  // Instantiate utmData object
  const utmData = {};

  // Populate utmData object
  utmData.medium = {
    utm: searchParams.get('utm_medium'),
    localStorage: localStorage.getItem('utm_medium'),
    label: 'utm_medium',
  };

  // Populate utmData object
  utmData.campaign = {
    utm: searchParams.get('utm_campaign'),
    localStorage: localStorage.getItem('utm_campaign'),
    label: 'utm_campaign',
  };

  // log utmData object
  console.log('utmData:', utmData);

  // Run UtmHandler for each utmData object
  for (let key in utmData) {
    if (utmData[key].utm) {
      UtmHandler(
        utmData[key].utm,
        utmData[key].localStorage,
        utmData[key].label
      );
    }
  }

  // Populate mainData object
  mainData.utmMedium = localStorage.getItem('utm_medium');
  mainData.utmCampaign = localStorage.getItem('utm_campaign');
};
