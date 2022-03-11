import styled from 'styled-components';

export const Wrapper = styled.div`
   display: flex;
   height: 480px;

   background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.5) 100%),
      url(${({ countryFlag }) => countryFlag});
   background-color: var(--paleBlue);
   background-position: center;
   background-size: 100% 480px;
   background-repeat: no-repeat;
   margin: 0;
`;

export const Content = styled.div`
   display: flex;
   justify-content: flex-end;
   padding: 30px 0;
   flex-flow: column;
   text-align: center;
   width: 50%;
   margin: 0 auto;
   color: var(--white);
   @media screen and (max-width: 760px) {
      width: 100%;
   }

   h2 {
      font-size: 2.5rem;
      text-shadow: 2px 2px 0 black;

      @media screen and (max-width: 760px) {
         font-size: var(--font-size-XL);
      }
   }
`;
