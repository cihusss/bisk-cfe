import {
  mainData,
  printData,
  sendToServer,
} from '../DataProcessor/DataProcessor';

export const EventDispatcher = (e) => {
  console.log('eventName:', e);
  mainData.event = e;
  printData();
  // sendToServer();
};
