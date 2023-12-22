import { EventManager } from './modules/EventManager/EventManager';
import { MetaPixelExtractor } from './modules/MetaPixelExtractor/MetaPixelExtractor';
import { UtmManager } from './modules/UtmManager/UtmManager';
import { userAgent } from './modules/DataProcessor/DataProcessor';

const App = () => {
  window.addEventListener('load', (e) => {
    UtmManager();
    EventManager();
    MetaPixelExtractor();
    userAgent();
  });
};

export default App;
