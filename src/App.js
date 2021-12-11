import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import useScript from './components/UseScript/UseScript';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';

const UseScripts = props => {
  useScript('/assets/js/header.js');
  useScript('/assets/js/calendar.js');
}

function App() {
  UseScripts();
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Dashboard' element={<Home />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;