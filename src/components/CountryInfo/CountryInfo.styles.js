import styled from 'styled-components';

export const Wrapper = styled.div`
   @media screen and (max-width: 760px) {
      display: flex;
      flex-direction: column;
   }

   h1,
   h2 {
      margin-top: 0;
      text-align: center;
   }
`;

export const Images = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-evenly;

   div {
      h2 {
         text-align: center;
      }
      img {
         max-height: 240px;
      }
   }
   @media screen and (max-width: 760px) {
      flex-direction: column;
      align-items: center;
      gap: 20px;
      justify-content: center;
   }
`;

export const Content = styled.div`
   display: flex;
   flex-flow: row wrap;
   gap: 20px;
   align-items: flex-start;
   justify-content: space-evenly;
   padding: 40px 20px;

   div {
      background-color: var(--lightBlue);
      padding: 20px;
      height: 200px;
      width: 400px;
      overflow-y: auto;
      border: 5px solid var(--darkBlue);
      border-radius: 10px;
      @media screen and (max-width: 760px) {
         width: 100%;
      }
   }
   * {
      font-size: var(--font-size-M);
   }
   @media screen and (max-width: 760px) {
      gap: 20px;
      flex-direction: column;
   }
`;
