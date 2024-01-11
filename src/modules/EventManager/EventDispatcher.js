import { mainData, sendToServer } from '../DataProcessor/DataProcessor';

export const EventDispatcher = (e) => {
  // console.log('eventName:', e);
  mainData.event = e;
  // sendToServer();

  MktoForms2.whenReady(function (form) {
    form.onSuccess(function (values, followUpUrl) {
      sendToServer();
    });
  });
};
