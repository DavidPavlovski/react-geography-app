import React from 'react';

import PropTypes from 'prop-types';

import { Wrapper } from './BreadCrumb.style';
import { Link } from 'react-router-dom';

export default function BreadCrumb({ setSortingOrder }){
   const handleChange = (e) => {
      setSortingOrder((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
   };

   return (
      <Wrapper>
         <div className='sort-options'>
            <div className='input-group'>
               <label htmlFor='property'>Sorty by</label>
               <select id='property' name='property' onChange={handleChange}>
                  <option value={'countryName'}>Country Name</option>
                  <option value={'capitalName'}>Capital Name</option>
               </select>
            </div>
            <div className='input-group'>
               <label htmlFor='order'>Order</label>
               <select id='order' name='order' onChange={handleChange}>
                  <option value={'asc'}>Ascending</option>
                  <option value={'desc'}>Descending</option>
               </select>
            </div>
         </div>
         <Link to='/'>Test your geography knowlege</Link>
      </Wrapper>
   );
}

BreadCrumb.propTypes = {
   setSortingOrder: PropTypes.func
};
