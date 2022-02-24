import React from 'react';

import PropTypes from 'prop-types';

import { Wrapper, Content } from './Hero.styles';

export default function Hero({ countryName, countryFlag }){
   return (
      <Wrapper countryFlag={countryFlag}>
         <Content>
            <h2>{countryName}</h2>
            <button>Link to country</button>
         </Content>
      </Wrapper>
   );
}

Hero.propTypes = {
   countryFlag: PropTypes.string,
   countryName: PropTypes.string
};
