import styled from 'styled-components';

export const Wrapper = styled.div`
   width: 100%;
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
   a {
      margin: 1rem auto;
      display: block;
      width: 60%;
      padding: 10px 20px;
      text-align: center;
      background-color: var(--paleBlue);
      border: 2px solid var(--darkBlue);
      border-radius: 10px;
      color: #000;
      font-size: var(--font-size-M);
      text-decoration: none;
   }
`;

export const Image = styled.img`
   object-fit: contain;
   width: 100%;
`;
