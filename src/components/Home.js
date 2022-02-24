import React, { useState, useEffect } from 'react';

import COUNTRIES_API from '../COUNTRIES_API';
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
   return (
      <React.Fragment>
         {countries.map((country) => <p key={country.name.official}>{country.name.official}</p>)}
      </React.Fragment>
   );
}
