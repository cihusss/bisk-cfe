import { dispatchEvent } from './dispatchEvent.js';

(function cfeInit() {

  dispatchEvent('cfeInit');

  window.addEventListener('load', (e) => {
    let metaPixel;

    console.log('page is fully loaded');

    const elements = document.querySelectorAll('.form-btn,.cfe-trigger');
    const scripts = document.querySelectorAll('script');

    // Add event listener to all buttons
    for (let i = 0; i < elements.length; i++) {
      let dataCfe = elements[i].getAttribute('data-cfe');

      elements[i].addEventListener('click', (e) => {
        if (dataCfe !== null) {
          dispatchEvent(dataCfe);
        } else {
          dispatchEvent(elements[i].innerText);
        }
      });
    }

    // Extract meta pixel ID
    for (let i = 0; i < scripts.length; i++) {
      if (scripts[i].innerText.includes('fbq')) {
        metaPixel = scripts[i].innerText;
        metaPixel = metaPixel.split('"init","')[1];
        metaPixel = metaPixel.split('");')[0];
        console.log('metaPixelID:', metaPixel);
      }
    }

    // Get URL params
    const searchParams = new URLSearchParams(window.location.search);
    let utmMediumParam = searchParams.get('utm_medium');
    let utmCampaignParam = searchParams.get('utm_campaign');
    console.log('utmMediumParam:', utmMediumParam);
    console.log('utmCampaignParam:', utmCampaignParam);

    // Store URL params

    let utmMediumStorage = localStorage.getItem('utm_medium');
    let utmCampaignStorage = localStorage.getItem('utm_campaign');

    if (utmMediumStorage == null) {
      localStorage.setItem('utm_medium', utmMediumParam);
    }

    if (utmCampaignStorage == null) {
      localStorage.setItem('utm_campaign', utmCampaignParam);
    }
  });
})();