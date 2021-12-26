import React from 'react';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import {Home} from '../src/pages/home';
import {Apiget} from '../src/pages/apiget'

import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route  path="/" element={<Home />}/>
         <Route  path="Apiget" element={<Apiget />}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
