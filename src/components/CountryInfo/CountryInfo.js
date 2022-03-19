import React from 'react';

import PropTypes from 'prop-types';

import { Wrapper, Content, Image, Links } from './CountryInfo.styles';
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
      <Wrapper>
         <Links>
            <a href='/'>Home</a>
            <a href={`https://en.wikipedia.org/wiki/${country.name.official.replaceAll(' ', '_')}`} target='blank'>
               Wikipedia page
            </a>
         </Links>
         <h1>{country.name.official}</h1>
         <h2>Capital : {country.capital[0]}</h2>
         <Content>
            <Image src={country.flags.svg} alt={`flag of ${country.name.official}`} />
            <div>
               <ul>Continent : {country.continents.map((c) => <li key={c}>{c}</li>)}</ul>
               <ul>Native names : {nativeNames}</ul>
               <ul>Languages : {languages}</ul>
            </div>
         </Content>
         <Content>
            <div>
               {country.borders ? <ul>Borders: {borders}</ul> : <p>Does not border with any other country</p>}
               <p>
                  Area : {country.area} km<sup>2</sup>
               </p>
               <p>Population : {country.population}</p>
               <ul>Currencies : {currency}</ul>
            </div>
            <Image src={country.coatOfArms.svg} alt={`coat of arms  of ${country.name.official}`} />
         </Content>
      </Wrapper>
   );
}

CountryInfo.propTypes = {
   country: PropTypes.object
};
