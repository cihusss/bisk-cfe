export const mainData = {};

export const userAgent = () => {
  console.log('userAgent', navigator.userAgent);
  mainData.userAgent = navigator.userAgent;
};

export const sendToServer = () => {
  console.log(`\nSEND TO SERVER ------------------------->`);
  console.log('sendToServer', mainData);
};
