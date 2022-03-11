import React from 'react';

import PropTypes from 'prop-types';

import { Wrapper, Content } from './Hero.styles';
import { Link } from 'react-router-dom';

export default function Hero({ countryName, countryFlag, code }){
   return (
      <Wrapper countryFlag={countryFlag}>
         <Content>
            <h2>{countryName}</h2>

            <Link to={`/country/${code}`}>Link to country</Link>
         </Content>
      </Wrapper>
   );
}

Hero.propTypes = {
   countryFlag: PropTypes.string,
   countryName: PropTypes.string,
   code: PropTypes.string
};
