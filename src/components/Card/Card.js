import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Image } from './Card.styles';
import Button from '../Button/Button';

export default function Card({ countryName, countryFlag, code, capital }){
   return (
      <Wrapper>
         <Image src={countryFlag} />
         <h2>{countryName}</h2>
         <h3>Capital : {capital}</h3>
         <Button path={`/country/${code}`}>See more info</Button>
      </Wrapper>
   );
}

Card.propTypes = {
   countryName: PropTypes.string,
   countryFlag: PropTypes.string,
   code: PropTypes.string
};
