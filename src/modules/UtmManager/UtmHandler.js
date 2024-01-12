export const UtmHandler = (a, b, c) => {
  console.log(`\nUTM HANDLER ------------------------->`);

  console.log(`${c}:`, a);
  console.log('localStorage:', b);

  if (!a && !b) {
    console.log('BOTH NULL > doing nothing');
  } else if (a && !b) {
    localStorage.setItem(c, a);
    console.log('utm PRESENT > storing UTM');
  } else if (!a && b) {
    console.log('localStorage PRESENT > doing nothing');
  } else if (a && b) {
    if (a !== b) {
      localStorage.setItem(c, a);
      console.log(
        'BOTH PRESENT > utm DIFFERENT from localStorage > storing new utm'
      );
    } else {
      console.log('BOTH PRESENT and MATCHING > doing nothing');
    }
  }
};
