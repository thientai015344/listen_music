import Menu from './component/Menu/Menu.js';
import SliderContent from './component/container/slider-content/SliderContent.js';
import PlayListSection from './component/container/PlayListSection/PlaylistSection.js';

import './App.css';


function App() {
  return (
    <div className="App">
      <Menu />
      <SliderContent />
      <PlayListSection />

    </div>
  );
}

export default App;
