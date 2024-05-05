import { EventManager } from './modules/EventManager/EventManager';
import { MetaPixelExtractor } from './modules/MetaPixelExtractor/MetaPixelExtractor';
import { UtmManager } from './modules/UtmManager/UtmManager';
import {
  getUserAgent,
  getFormData,
  getMetaCookies,
  getIpData,
  getSourceUrl,
  printData,
  getHostname,
} from './modules/DataProcessor/DataProcessor';

const App = () => {
  console.log('capi-fe v.104 running...');
  window.addEventListener('load', (e) => {
    UtmManager();
    EventManager();
    MetaPixelExtractor();
    getUserAgent();
    getMetaCookies();
    getFormData();
    getIpData();
    getSourceUrl();
    getHostname();
  });
};

export default App;
