import React from 'react';

import { Link } from 'react-router-dom';
import { Wrapper, Image } from './Card.styles';

export default function Card({ countryName, countryFlag }){
   return (
      <Wrapper>
         <Image src={countryFlag} />
         <h2>{countryName}</h2>
         <Link to={`/country/${countryName}`}>See more info</Link>
      </Wrapper>
   );
}
