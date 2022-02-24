import React from 'react';

import { GlobalStyles } from './GlobalStyles';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import CountryDetails from './components/CountryDetails';

function App(){
   return (
      <Router>
         <Navbar />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/country/:name' element={<CountryDetails />} />
         </Routes>
         <GlobalStyles />
      </Router>
   );
}

export default App;
