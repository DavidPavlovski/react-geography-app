import React from 'react';
import { useParams } from 'react-router';
import Spinner from './Spinner/Spinner';
import CountryInfo from './CountryInfo/CountryInfo';
import useFetchCountry from '../hooks/useFetchCountry';
export default function CountryDetails(){
   const { name } = useParams();
   const { loading, error, errorMsg, country } = useFetchCountry(name);

   if (loading) {
      return <Spinner />;
   }

   if (error) {
      return (
         <div>
            <h1>{errorMsg}</h1>
         </div>
      );
   }

   return (
      <div>
         <CountryInfo country={country} />
      </div>
   );
}
