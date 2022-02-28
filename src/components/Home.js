import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import useFetchCountries from '../hooks/useFetchCountries';

import Spinner from './Spinner/Spinner';
import Hero from './Hero/Hero';
import Grid from './Grid/Grid';

export default function Home({ searchTerm }){
   const [ randomCountry, setRandomCountry ] = useState({});
   const { countries, loading, error } = useFetchCountries(searchTerm);

   useEffect(
      () => {
         const randomNumber = Math.floor(Math.random() * countries.length);
         setRandomCountry(countries[randomNumber]);
      },
      [ countries ]
   );

   if (error) {
      return (
         <div>
            <h1>Something Went Wrong</h1>
         </div>
      );
   }

   if (loading) {
      return <Spinner />;
   }

   return (
      <React.Fragment>
         {countries.length > 0 &&
         !searchTerm && <Hero countryName={randomCountry.name.official} countryFlag={randomCountry.flags.svg} />}

         {<Grid header={searchTerm ? `Results for ${searchTerm}` : 'All countries'} countries={countries} />}
      </React.Fragment>
   );
}

Home.propTypes = {
   searchTerm: PropTypes.string
};
