import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import useFetchCountries from '../hooks/useFetchCountries';

import Spinner from './Spinner/Spinner';
import Hero from './Hero/Hero';
import Grid from './Grid/Grid';
import BreadCrumb from './BreadCrumb/BreadCrumb';

export default function Home({ searchTerm }){
   const [ randomCountry, setRandomCountry ] = useState({});
   const { loading, error, errorMsg, countries } = useFetchCountries(searchTerm);
   const [ sortingOrder, setSortingOrder ] = useState({
      property: 'countryName',
      order: 'asc'
   });

   const sortedCountries = () => {
      if (sortingOrder.property === 'countryName') {
         return countries.sort((a, b) => {
            if (sortingOrder.order === 'asc') {
               return a.name.official.localeCompare(b.name.official);
            }
            return b.name.official.localeCompare(a.name.official);
         });
      }

      if (sortingOrder.property === 'capitalName') {
         return countries.sort((a, b) => {
            if (sortingOrder.order === 'asc') {
               return String(a.capital).localeCompare(b.capital);
            }
            return String(b.capital).localeCompare(a.capital);
         });
      }
   };

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

         <BreadCrumb setSortingOrder={setSortingOrder} />

         {<Grid header={searchTerm ? `Results for ${searchTerm}` : 'All countries'} countries={sortedCountries()} />}
      </React.Fragment>
   );
}

Home.propTypes = {
   searchTerm: PropTypes.string
};
