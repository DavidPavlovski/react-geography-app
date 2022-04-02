import styled from 'styled-components';

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   @media screen and (max-width: 760px) {
      display: flex;
      flex-direction: column;
   }
   h1,
   h2 {
      margin: 20px 0;
      text-align: center;
   }
`;

export const Image = styled.img`
   height: 340px;
   @media screen and (max-width: 760px) {
      height: 170px;
   }
`;

export const Content = styled.div`
   width: 80%;
   margin: 10px auto;
   display: flex;
   align-items: flex-start;
   justify-content: space-evenly;
   p,
   ul {
      font-size: var(--font-size-L);
      font-weight: 600;
      letter-spacing: 1.1px;
   }

   @media screen and (max-width: 1300px) {
      flex-direction: column;
      align-items: center;
      img {
         order: 0;
      }
      div {
         order: 1;
      }
   }
`;

export const Links = styled.div`
   width: 70%;
   margin: 20px auto 0;
   display: flex;
   justify-content: space-between;
   align-items: center;
   font-size: var(--font-size-L);
   a {
      text-decoration: none;
   }
   @media screen and (max-width: 760px) {
      width: 100%;
      padding: 0 20px;
      font-size: var(--font-size-M);
   }
`;
