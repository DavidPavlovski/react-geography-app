import React from 'react';

import { Wrapper, Content } from './Grid.styles';

export default function Grid({ header, countries }){
   return (
      <Wrapper>
         <h2>{header}</h2>
         <Content>
            {countries.map((country) => (
               <div>
                  <img src={country.flags.svg} alt={`flag of ${country.name.official}`} />
               </div>
            ))}
         </Content>
      </Wrapper>
   );
}
