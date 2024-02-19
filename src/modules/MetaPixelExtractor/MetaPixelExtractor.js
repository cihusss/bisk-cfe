import { mainData } from '../DataProcessor/DataProcessor';

export const MetaPixelExtractor = () => {
  console.log(`\nMETA PIXEL EXTRACTOR -------------------------->!`);

  let metaPixel;
  const scripts = document.querySelectorAll('script');

  // Extract meta pixel ID
  for (let i = 0; i < scripts.length; i++) {
    if (scripts[i].innerText.includes('fbq')) {
      try {
        metaPixel = scripts[i].innerText;
        metaPixel = metaPixel.split('"init","')[1];
        metaPixel = metaPixel.split('");')[0];
        console.log('metaPixelID:', metaPixel);
      } catch (err) {
        console.log('Error extracting metaPixelID:', err);
      }
    }
  }

  // Populate mainData object
  // mainData.pixel_id = metaPixel;
  mainData.pixel_id = '316369316621022';
};
