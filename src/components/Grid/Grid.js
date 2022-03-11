import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content } from './Grid.styles';

import Card from '../Card/Card';
export default function Grid({ header, countries }){
   return (
      <Wrapper>
         <h2>{header}</h2>
         <Content>
            {countries.map((country) => (
               <Card
                  key={country.name.official}
                  countryName={country.name.official}
                  countryFlag={country.flags.png}
                  code={country.cca3}
               />
            ))}
         </Content>
      </Wrapper>
   );
}

Grid.propTypes = {
   header: PropTypes.string,
   countries: PropTypes.array
};
