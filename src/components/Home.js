import React, { useState, useEffect } from 'react';

import COUNTRIES_API from '../COUNTRIES_API';

import Spinner from './Spinner/Spinner';
export default function Home(){
   const [ loading, setLoading ] = useState(false);
   const [ error, setError ] = useState(false);
   const [ countries, setCountries ] = useState([]);

   const fetchCountries = async () => {
      try {
         setError(false);
         setLoading(true);
         const data = await COUNTRIES_API.fetchCountries();
         setCountries(data);
         setLoading(false);
      } catch (e) {
         setError(true);
      }
   };

   useEffect(() => {
      fetchCountries();
   }, []);
   if (error) {
      return (
         <div>
            <h1>Something Went Wrong</h1>
         </div>
      );
   }
   return (
      <React.Fragment>
         {loading && <Spinner />}
         {countries.map((country) => <p key={country.name.official}>{country.name.official}</p>)}
      </React.Fragment>
   );
}
