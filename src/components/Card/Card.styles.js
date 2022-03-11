import styled from 'styled-components';

export const Wrapper = styled.div`
   width: 100%;
   display: flex;
   border-radius: 10px;
   flex-direction: column;
   background-color: var(--medBlue);

   h2 {
      font-size: var(--font-size-M);
      text-align: center;
      color: var(--white);
   }
   h3 {
      color: var(--white);
      font-size: var(--font-size-S);
      text-align: center;
   }

   @media screen and(max-width:700px) {
      width: 100%;
   }
`;

export const Image = styled.img`
   object-fit: contain;
   width: 100%;
`;
