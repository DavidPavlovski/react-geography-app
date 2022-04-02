import React from 'react';
import PropTypes from 'prop-types';

import { ButtonLink } from './Button.style';

export default function Button({ path, children }){
   return <ButtonLink to={path}>{children}</ButtonLink>;
}

Button.propTypes = {
   path: PropTypes.string
};
