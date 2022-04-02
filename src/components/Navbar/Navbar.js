import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Wrapper, Logo, SearchBar } from './Navbar.styles';
import globeIcon from '../../assets/icons/globe.svg';
import searchIcon from '../../assets/icons/search-icon.svg';

export default function Navbar({ searchTerm, setSearchTerm }){
   const handleChange = (e) => {
      setSearchTerm(e.target.value);
   };

   return (
      <Wrapper>
         <Link to='/'>
            <Logo>
               <img src={globeIcon} alt='logo' />
               <h3>Rest Countries</h3>
            </Logo>
         </Link>

         <SearchBar>
            <img src={searchIcon} alt='' />
            <input type='text' placeholder='search country' value={searchTerm} onChange={handleChange} />
         </SearchBar>
      </Wrapper>
   );
}

Navbar.propTypes = {
   searchTerm: PropTypes.string,
   setSearchTerm: PropTypes.func
};
