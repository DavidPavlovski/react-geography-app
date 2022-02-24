import React from 'react';

import { Wrapper, Content } from './Grid.styles';

import Card from '../Card/Card';
export default function Grid({ header, countries }){
   return (
      <Wrapper>
         <h2>{header}</h2>
         <Content>
            {countries.map((country) => (
               <Card key={country.name.official} countryName={country.name.official} countryFlag={country.flags.svg} />
            ))}
         </Content>
      </Wrapper>
   );
}
