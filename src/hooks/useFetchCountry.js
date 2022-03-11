import { useState, useEffect } from 'react';

import API from '../COUNTRIES_API';

const useFetchCountry = (name) => {
   const [ loading, setLoading ] = useState(true);
   const [ error, setError ] = useState(false);
   const [ errorMsg, setErrorMsg ] = useState('');
   const [ country, setCountry ] = useState({});

   async function fetchCountry(name){
      try {
         setLoading(true);
         const data = await API.fetchCountry(name);
         if (data.status === 404) {
            throw Error(`Cannot find resulsts for ${name}`);
         }
         setCountry(data[0]);
         setLoading(false);
      } catch (e) {
         setError(true);
         setErrorMsg(e.message);
         setLoading(false);
      }
   }

   useEffect(
      () => {
         if (sessionStorage.getItem(name)) {
            setLoading(false);
            setCountry(JSON.parse(sessionStorage.getItem(name)));
            return;
         }
         fetchCountry(name);
      },
      [ name ]
   );

   useEffect(
      () => {
         sessionStorage.setItem(name, JSON.stringify(country));
      },
      [ name, country ]
   );
   return { loading, error, errorMsg, country };
};

export default useFetchCountry;
