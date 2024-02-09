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
} from './modules/DataProcessor/DataProcessor';

const App = () => {
  window.addEventListener('load', (e) => {
    // UtmManager();
    EventManager();
    MetaPixelExtractor();
    getUserAgent();
    getMetaCookies();
    getFormData();
    getIpData();
    getSourceUrl();
  });
};

export default App;
