import { EventManager } from './modules/EventManager/EventManager';
import { MetaPixelExtractor } from './modules/DataProcessor/MetaPixelExtractor';
import { UtmManager } from './modules/UtmManager/UtmManager';

const App = () => {
  window.addEventListener('load', (e) => {
    UtmManager();
    EventManager();
    MetaPixelExtractor();
  });
};

export default App;
