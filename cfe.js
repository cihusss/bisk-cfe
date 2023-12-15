(function cfe() {
  window.addEventListener('load', (e) => {
    let metaPixel;

    console.log('page is fully loaded');

    const elements = document.getElementsByClassName('form-btn');
    const scripts = document.querySelectorAll('script');

    // Add event listener to all buttons
    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', (e) => {
        console.log(elements[i].getAttribute('data-cfe'));
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
    console.log('utm_medium:', searchParams.get('utm_medium'));
    console.log('utm_campaign:', searchParams.get('utm_campaign'));
  });
})();
