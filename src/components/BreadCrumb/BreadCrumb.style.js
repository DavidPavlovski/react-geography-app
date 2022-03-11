import styled from 'styled-components';

export const Wrapper = styled.div`
   padding: 20px 40px;
   background-color: var(--lightBlue);
   display: flex;
   justify-content: space-between;
   align-items: center;

   a {
      width: initial;
      margin: 0;
      padding: 10px 30px;
   }

   .sort-options {
      display: flex;
      width: 50%;
      gap: 10px;
      align-items: center;

      .input-group {
         label {
            font-size: var(--font-size-S);
         }
         select {
            padding: 0 10px;
            margin-left: 5px;
            height: 30px;
            font-size: var(--font-size-S);
         }
      }
   }
`;
