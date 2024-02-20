import { mainData } from '../DataProcessor/DataProcessor';

export const MetaPixelExtractor = () => {
  console.log(`\nMETA PIXEL EXTRACTOR -------------------------->!`);

  let metaPixel;
  let metaPixels = [];
  const scripts = document.querySelectorAll('script');

  // Extract meta pixel ID
  for (let i = 0; i < scripts.length; i++) {
    if (scripts[i].innerText.includes('fbq')) {
      try {
        metaPixel = scripts[i].innerText;
        metaPixel = metaPixel.split('"init","')[1];
        metaPixel =
          metaPixel.split('");')[0] ||
          metaPixel.split('",fb_advanced_matching);')[0];
        console.log('metaPixelID:', metaPixel);
        metaPixels.push(metaPixel);
      } catch (err) {
        console.log('Error extracting metaPixelID:', err);
      }
    }
  }

  // Populate mainData object
  console.log('metaPixels:', metaPixels);
  mainData.pixel_id = metaPixels[0];
  // mainData.pixel_id = '316369316621022';
};
