import React from 'react';

import PropTypes from 'prop-types';

import { Wrapper, Images, Content } from './CountryInfo.styles';
import { Link } from 'react-router-dom';

export default function CountryInfo({ country }){
   const nativeNames = Object.keys(country.name.nativeName).map((key) => (
      <li key={key}>
         <b>{key}</b>: {country.name.nativeName[key].official}
      </li>
   ));

   const borders =
      country.borders &&
      country.borders.map((border) => (
         <li key={border}>
            <Link to={`/country/${border}`}>{border}</Link>
         </li>
      ));

   const currency = Object.keys(country.currencies).map((key) => (
      <li key={key}>
         {country.currencies[key].name} {country.currencies[key].symbol}
      </li>
   ));

   const languages = Object.keys(country.languages).map((key) => <li key={key}>{country.languages[key]}</li>);
   return (
      <React.Fragment>
         <Wrapper>
            <h1>{country.name.official}</h1>
            <h2>Capital : {country.capital[0]}</h2>
            <Images>
               <div>
                  <h2>Flag</h2>
                  <img src={country.flags.svg} alt={`flag of ${country.name.official}`} />
               </div>
               <div>
                  <h2>Coat of arms</h2>
                  <img src={country.coatOfArms.svg} alt={`coat of arms  of ${country.name.official}`} />
               </div>
            </Images>

            <Content>
               <div>
                  {country.borders ? <ul>Borders : {borders}</ul> : <p>Does not border with any other country</p>}
               </div>
               <div>
                  <ul>Continent : {country.continents.map((c) => <li key={c}>{c}</li>)}</ul>
               </div>
               <div>
                  <ul>Native names : {nativeNames}</ul>
                  <ul>Languages : {languages}</ul>
               </div>
               <div>
                  <p>
                     Area : {country.area} km<sup>2</sup>
                  </p>
                  <p>Population : {country.population}</p>
               </div>
               <div>
                  <ul>Currencies : {currency}</ul>
               </div>
            </Content>
         </Wrapper>
      </React.Fragment>
   );
}

CountryInfo.propTypes = {
   country: PropTypes.object
};
