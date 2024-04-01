
import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Nav } from './Components/Navbar';

import Price from './Screens/Price';
import Home from './Screens/Home';

function App() {
  return (
    <div className='font-Poppins'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/prices' element={<Price />} />

      </Routes>
    </div>
  );
}

export default App;
