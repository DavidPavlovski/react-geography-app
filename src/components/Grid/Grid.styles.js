import styled from 'styled-components';

export const Wrapper = styled.div`
   width: 100%;
   margin: 0 auto;
   padding: 0 20px;

   > h2 {
      font-size: var(--font-size-XL);
      text-align: center;
      width: 50%;
      margin: 2rem auto;
      border-bottom: 3px solid var(--darkBlue);
   }
`;

export const Content = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
   grid-gap: 3rem;
`;
