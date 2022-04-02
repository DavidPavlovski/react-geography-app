import React from 'react';

import Button from './Button/Button';

function NotFound(){
   return (
      <div className='not-found'>
         <h1>The page you are trying to reach does not exist</h1>
         <Button path='/'>Back to home</Button>
      </div>
   );
}

export default NotFound;
