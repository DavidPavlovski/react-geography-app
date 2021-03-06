import styled from 'styled-components';

export const Wrapper = styled.form`
   padding: 20px 0;
   margin: 75px auto;
   align-items: center;
   justify-content: center;
   width: 50%;
   gap: 20px;
   display: flex;
   flex-direction: column;
   background-color: var(--lightBlue);
   border: 5px solid var(--blue);
   border-radius: 10px;

   div {
      display: flex;
      align-items: center;

      select,
      label {
         font-size: var(--font-size-M);
      }
      select {
         text-indent: 10px;
         margin-left: 10px;
         width: 150px;
         height: 40px;
      }
   }

   button {
      padding: 10px;
      width: 50%;
      font-size: var(--font-size-M);
   }

   @media screen and (max-width: 760px) {
      width: 100%;
   }
`;
