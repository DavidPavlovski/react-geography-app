import styled from 'styled-components';

export const Wrapper = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   background-color: var(--medBlue);

   h2 {
      font-size: var(--font-size-L);
      text-align: center;
      color: var(--white);
   }
   @media screen and(max-width:700px) {
      width: 100%;
   }
   border-radius: 10px;
`;

export const Image = styled.img`
   object-fit: contain;
   width: 100%;
`;
