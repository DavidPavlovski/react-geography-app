import { useState, useEffect } from 'react';

import API from '../COUNTRIES_API';

const useFetchCountries = (searchTerm = '') => {
   const [ loading, setLoading ] = useState(true);
   const [ error, setError ] = useState(false);
   const [ errorMsg, setErrorMsg ] = useState('');
   const [ countries, setCountries ] = useState([]);

   const fetchCountries = async (searchTerm = '') => {
      try {
         setLoading(true);
         setError(false);
         const data = searchTerm ? await API.searchCountries(searchTerm) : await API.fetchCountries();
         if ((data.status === 404 && searchTerm) || !data.length) {
            throw Error(`Cannot find results for ${searchTerm}`);
         }
         setCountries(data);
         setLoading(false);
      } catch (e) {
         setError(true);
         setErrorMsg(e.message);
         setLoading(false);
      }
   };

   useEffect(
      () => {
         if (!searchTerm) {
            fetchCountries();
            return;
         }
         const timer = setTimeout(() => {
            fetchCountries(searchTerm);
         }, 500);

         return () => clearTimeout(timer);
      },
      [ searchTerm ]
   );

   return { loading, error, errorMsg, countries };
};

export default useFetchCountries;
