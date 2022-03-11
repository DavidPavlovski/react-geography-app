import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonLink = styled(Link)`
   width: 50%;
   margin: 0 auto 10px;
   text-align:center;
   padding: 20px 0;
   text-decoration: none;
   font-weight: 500;
   font-size: var(--font-size-M);
   background-color: var(--blue);
   color: var(--white);
   border: none;
   border-radius: 10px;
   transition: all 300ms ease;
   :hover {
      border-radius: 15px;
      transform: translateY(-5px);
      box-shadow: 0 20px 15px -20px rgba(255, 255, 255, 0.5), inset -15px -15px 10px -5px rgba(0, 0, 0, 0.5);
   }
   :active {
      box-shadow: inset 15px 15px 10px -5px rgba(0, 0, 0, 0.5);
      transform: translateY(-0);
   }
`;
