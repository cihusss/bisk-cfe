import { UtmHandler } from './UtmHandler';
import { mainData } from '../DataProcessor/DataProcessor';

export const UtmManager = () => {
  // console.log(`\nUTM MANAGER ------------------------->!`);

  // Instantiate URLSearchParams object
  const searchParams = new URLSearchParams(window.location.search);
  // Instantiate utmData object
  const utmData = {};

  // Populate utmData object with source
  utmData.medium = {
    utm: searchParams.get('utm_source'),
    localStorage: localStorage.getItem('utm_source'),
    label: 'utm_source',
  };

  // Populate utmData object with gclid/wbraid/gbraid
  const gParams = ['gclid', 'wbraid', 'gbraid'];
  gParams.forEach((param) => {
    utmData[param] = {
      utm: searchParams.get(param),
      localStorage: localStorage.getItem(param),
      label: param,
    };
  });

  // Run UtmHandler for each utmData key (populate localStorage and cookies)
  for (let key in utmData) {
    if (utmData[key].utm) {
      UtmHandler(utmData[key].utm, utmData[key].localStorage, utmData[key].label);
    }
  }

  const getCookie = (cname) => {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  };

  mainData.gclid = getCookie('gclid');
  mainData.wbraid = getCookie('wbraid');
  mainData.gbraid = getCookie('gbraid');
  mainData.utmSource = getCookie('utm_source');
  console.log('mainData:', mainData);
};
