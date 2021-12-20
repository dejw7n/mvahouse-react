import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import useScript from './components/UseScript/UseScript';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import Search from './containers/Search/Search';
import Apartment from './containers/Apartment/Apartment';

const UseScripts = props => {
  useScript('/assets/js/header.js');
  useScript('/assets/js/calendar.js');
  useScript('/assets/js/lazyLoad.js');
  useScript('https://vjs.zencdn.net/7.17.0/video.min.js');
}

function App() {
  UseScripts();
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/apartment/:apartment' element={<Apartment />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;