export const MetaPixelExtractor = () => {
  console.log(`\nMETA PIXEL EXTRACTOR ------------------------->`);

  let metaPixel;
  const scripts = document.querySelectorAll('script');

  // Extract meta pixel ID
  for (let i = 0; i < scripts.length; i++) {
    if (scripts[i].innerText.includes('fbq')) {
      metaPixel = scripts[i].innerText;
      metaPixel = metaPixel.split('"init","')[1];
      metaPixel = metaPixel.split('");')[0];
      console.log('metaPixelID:', metaPixel);
    }
  }
};
