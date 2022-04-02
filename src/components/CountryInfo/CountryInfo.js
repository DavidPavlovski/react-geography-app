import React from 'react';
import { Link } from 'react-router-dom';
import iso from 'iso-3166-1';
import PropTypes from 'prop-types';

import { Wrapper, Content, Image, Links } from './CountryInfo.styles';

export default function CountryInfo({ country }){
   const nativeNames =
      country.name.nativeName &&
      Object.keys(country.name.nativeName).map((key) => (
         <li key={key}>
            <b>{key}</b>: {country.name.nativeName[key].official}
         </li>
      ));

   const borders =
      country.borders &&
      country.borders.map((border) => {
         let borderName = !!iso.whereAlpha3(border) ? iso.whereAlpha3(border).country : border;
         return (
            <li key={border}>
               <Link to={`/country/${border}`}>{borderName}</Link>
            </li>
         );
      });

   const currency =
      country.currencies &&
      Object.keys(country.currencies).map((key) => (
         <li key={key}>
            {country.currencies[key].name} (<b>{country.currencies[key].symbol}</b>)
         </li>
      ));

   const languages =
      country.languages && Object.keys(country.languages).map((key) => <li key={key}>{country.languages[key]}</li>);

   return (
      <Wrapper>
         <Links>
            <a href='/'>Home</a>
            <a href={`https://en.wikipedia.org/wiki/${country.name.official.replaceAll(' ', '_')}`} target='blank'>
               Wikipedia page
            </a>
         </Links>
         <h1>{country.name.official}</h1>
         <h2>Capital : {country.capital ? country.capital[0] : 'None'}</h2>
         <Content>
            <Image src={country.flags.svg} alt={`flag of ${country.name.official}`} />
            <div>
               <ul>Continent : {country.continents.map((c) => <li key={c}>{c}</li>)}</ul>
               <ul>Native names : {nativeNames || <li>None</li>}</ul>
               <ul>Languages : {languages || <li>None</li>}</ul>
            </div>
         </Content>
         <Content>
            <div>
               {country.borders ? <ul>Borders: {borders}</ul> : <p>Does not border with any other country</p>}
               <p>
                  Area : {country.area} km<sup>2</sup>
               </p>
               <p>Population : {country.population}</p>
               <ul>Currencies : {currency || <li>None</li>}</ul>
            </div>
            <Image src={country.coatOfArms.svg} alt={`coat of arms  of ${country.name.official}`} />
         </Content>
      </Wrapper>
   );
}

CountryInfo.propTypes = {
   country: PropTypes.object
};
