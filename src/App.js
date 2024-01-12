import { EventManager } from './modules/EventManager/EventManager';
import { MetaPixelExtractor } from './modules/MetaPixelExtractor/MetaPixelExtractor';
import { UtmManager } from './modules/UtmManager/UtmManager';
import {
  getUserAgent,
  getFormData,
} from './modules/DataProcessor/DataProcessor';

const App = () => {
  window.addEventListener('load', (e) => {
    UtmManager();
    EventManager();
    MetaPixelExtractor();
    getUserAgent();
    getFormData();
  });
};

export default App;
