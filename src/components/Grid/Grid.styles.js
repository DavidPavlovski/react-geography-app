import styled from 'styled-components';

export const Wrapper = styled.div`
   width: 100%;
   margin: 0 auto;
   padding: 0 20px;
`;

export const Content = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
   grid-gap: 3rem;
   div {
      width: 300px;
      img {
         width: 100%;
         object-fit: cover;
      }
   }
`;
