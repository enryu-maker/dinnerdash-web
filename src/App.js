import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './Components/Navbar';
import Price from './Screens/Price';
import Home from './Screens/Home';

import Foter from './Components/Footer';
import FAQ from './Screens/FAQ';
import PP from './Screens/PP';

function App() {
  return (
    <div className='font-Poppins'>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/prices' element={<Price />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/privacypolicy' element={<PP />} />
      </Routes>
      <Foter />
    </div>
  );
}

export default App;
