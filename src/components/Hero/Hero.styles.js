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
   button {
      height: 50px;
      font-weight: 500;
      font-size: var(--font-size-M);
      background-color: var(--blue);
      color: var(--white);
      border: none;
      border-radius: 10px;
      transition: all 300ms ease;
      :hover {
         opacity: 0.8;
         border-radius: 25px;
         transform: translateY(-5px);
         box-shadow: 0 20px 15px -20px rgba(255, 255, 255, 0.5), inset -15px -15px 10px -5px rgba(0, 0, 0, 0.5);
      }
      :active {
         box-shadow: inset 15px 15px 10px -5px rgba(0, 0, 0, 0.5);
         transform: translateY(-0);
      }
   }
`;
