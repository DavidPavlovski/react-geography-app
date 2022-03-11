import React, { useState } from 'react';

import { GlobalStyles } from './GlobalStyles';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import CountryDetails from './components/CountryDetails';
import Quiz from './components/Quiz';

function App(){
   const [ searchTerm, setSearchTerm ] = useState('');
   return (
      <Router>
         <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
         <Routes>
            <Route path='/' element={<Home searchTerm={searchTerm} />} />
            <Route path='/country/:name' element={<CountryDetails />} />
            <Route path='/quiz' element={<Quiz />} />
         </Routes>
         <GlobalStyles />
      </Router>
   );
}

export default App;
