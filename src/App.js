import React from 'react';

import { GlobalStyles } from './GlobalStyles';

import Navbar from './components/Navbar/Navbar';
function App(){
   return (
      <div>
         <Navbar />
         Rest Countries
         <GlobalStyles />
      </div>
   );
}

export default App;
