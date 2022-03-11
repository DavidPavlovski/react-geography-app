import React from 'react';

import Button from '../Button/Button';
import { Wrapper, Image } from './Card.styles';

export default function Card({ countryName, countryFlag, code }){
   return (
      <Wrapper>
         <Image src={countryFlag} />
         <h2>{countryName}</h2>
         <Button path={`/country/${code}`}>See more info</Button>
      </Wrapper>
   );
}
