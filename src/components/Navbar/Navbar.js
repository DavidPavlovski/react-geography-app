import React from 'react';

import { Wrapper, Logo, SearchBar } from './Navbar.styles';
import globeIcon from '../../assets/icons/globe.svg';
import searchIcon from '../../assets/icons/search-icon.svg';

export default function Navbar(){
   return (
      <Wrapper>
         <Logo>
            <img src={globeIcon} alt='logo' />
            <h3>Rest Countries</h3>
         </Logo>

         <SearchBar>
            <img src={searchIcon} alt='' />
            <input type='text' placeholder='search country' />
         </SearchBar>
      </Wrapper>
   );
}
