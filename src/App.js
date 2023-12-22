import { EventManager } from './modules/EventManager';
import { MetaPixelExtractor } from './modules/MetaPixelExtractor';
import { UtmManager } from './modules/UtmManager';

const App = () => {
  window.addEventListener('load', (e) => {
    UtmManager();
    EventManager();
    MetaPixelExtractor();
  });
};

export default App;
