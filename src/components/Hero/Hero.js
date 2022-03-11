import React from 'react';

import PropTypes from 'prop-types';

import Button from '../Button/Button';
import { Wrapper, Content } from './Hero.styles';

export default function Hero({ countryName, countryFlag, code }){
   return (
      <Wrapper countryFlag={countryFlag}>
         <Content>
            <h2>{countryName}</h2>
            <Button path={`/country/${code}`}>{countryName} details</Button>
         </Content>
      </Wrapper>
   );
}

Hero.propTypes = {
   countryFlag: PropTypes.string,
   countryName: PropTypes.string,
   code: PropTypes.string
};
