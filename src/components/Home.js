import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import useFetchCountries from '../hooks/useFetchCountries';

import Spinner from './Spinner/Spinner';
import Hero from './Hero/Hero';
import Grid from './Grid/Grid';

export default function Home({ searchTerm }){
   const [ randomCountry, setRandomCountry ] = useState({});
   const { loading, error, errorMsg, countries } = useFetchCountries(searchTerm);

   useEffect(
      () => {
         const randomNumber = Math.floor(Math.random() * countries.length);
         setRandomCountry(countries[randomNumber]);
      },
      [ countries ]
   );

   if (error) {
      return <h1>{errorMsg}</h1>;
   }

   if (loading) {
      return <Spinner />;
   }

   return (
      <React.Fragment>
         {!searchTerm && (
            <Hero
               countryName={randomCountry.name.official}
               countryFlag={randomCountry.flags.svg}
               code={randomCountry.cca3}
            />
         )}

         {<Grid header={searchTerm ? `Results for ${searchTerm}` : 'All countries'} countries={countries} />}
      </React.Fragment>
   );
}

Home.propTypes = {
   searchTerm: PropTypes.string
};
