import styled from 'styled-components';

export const Spinner = styled.div`
   width: 100px;
   height: 100px;
   border: 7px solid var(--darkBlue);
   border-top-color: var(--white);
   border-bottom-color: var(--white);
   border-radius: 50%;
   animation: spinner 2s linear infinite;
   margin: 50px auto;

   @keyframes spinner {
      from {
         transform: rotate(0deg);
      }
      to {
         transform: rotate(360deg);
      }
   }
`;
