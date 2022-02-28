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
      await COUNTRIES_API.searchCountries(searchTerm)
         .then((res) => {
            if (!res.ok || res.status === 404) {
               setError(true);
            }
            return res.json();
         })
         .then((data) => {
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
