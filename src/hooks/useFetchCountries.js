import { useState, useEffect } from 'react';

import COUNTRIES_API from '../COUNTRIES_API';

const useFetchCountries = (searchTerm = '') => {
   const [ countries, setCountries ] = useState([]);
   const [ loading, setLoading ] = useState(false);
   const [ error, setError ] = useState(false);

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

   const searchCountries = async (searchTerm) => {
      setLoading(true);
      setError(false);
      await fetch(`https://restcountries.com/v3.1/name/${searchTerm}`)
         .then((res) => {
            if (!res.ok) {
               setError(true);
               setLoading(false);
            }
            return res.json();
         })
         .then((data) => {
            setLoading(false);
            setCountries(data);
         })
         .catch((e) => {
            setLoading(false);
            setError(true);
         });
   };

   useEffect(
      () => {
         if (!searchTerm) {
            fetchCountries();
            return;
         }
         const timer = setTimeout(() => {
            searchCountries(searchTerm);
         }, 500);

         return () => clearTimeout(timer);
      },
      [ searchTerm ]
   );

   return { countries, loading, error };
};

export default useFetchCountries;
