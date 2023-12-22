export const UtmHandler = (a, b, c) => {
  console.log(`\nUTM HANDLER ------------------------->`);

  console.log(`${c}:`, a);
  console.log('localStorage:', b);

  if (!a && !b) {
    console.log('BOTH NULL > doing nothing');
  } else if (a && !b) {
    localStorage.setItem(c, a);
    console.log('utm HERE > storing UTM');
  } else if (!a && b) {
    console.log('localStorage HERE > doing nothing');
  } else if (a && b) {
    if (a !== b) {
      localStorage.setItem(c, a);
      console.log('BOTH HERE > utm DIFFERENT from localStorage > storing new utm');
    } else {
      console.log('BOTH HERE and MATCHING > doing nothing');
    }
  }

  // if (!utmMediumParam && !utmMediumStorage) {
  //   console.log('BOTH NULL > doing nothing');
  // }
  // else if (utmMediumParam && !utmMediumStorage) {
  //   localStorage.setItem('utm_medium', utmMediumParam);
  //   console.log('UTM HERE > storing UTM');
  // }
  // else if (!utmMediumParam && utmMediumStorage) {
  //   console.log('STORAGE HERE > doing nothing');
  // }
  // else if (utmMediumParam && utmMediumStorage) {
  //   if (utmMediumParam !== utmMediumStorage) {
  //     localStorage.setItem('utm_medium', utmMediumParam);
  //     console.log('BOTH HERE > UTM DIFFERENT from STORAGE > storing new UTM');
  //   }
  //   else {
  //     console.log('BOTH HERE and MATCHING > doing nothing');
  //   }
  // }
};
