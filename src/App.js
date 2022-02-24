import React from 'react';

import { GlobalStyles } from './GlobalStyles';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';

function App(){
   return (
      <Router>
         <Navbar />
         <Routes>
            <Route path='/' element={<Home />} />
         </Routes>
         <GlobalStyles />
      </Router>
   );
}

export default App;
