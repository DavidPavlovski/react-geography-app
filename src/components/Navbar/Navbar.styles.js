import styled from 'styled-components';

export const Wrapper = styled.nav`
   display: flex;
   width: 100%;
   align-items: center;
   padding: 0 40px;
   justify-content: space-between;
   background-color: var(--blue);
`;

export const Logo = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   img {
      width: 75px;
   }
   h3 {
      color: var(--white);
      font-size: var(--font-size-L);
   }
`;

export const SearchBar = styled.div`
   display: flex;
   position: relative;
   input {
      width: 250px;
      height: 40px;
      border-radius: 25px;
      border: none;
      background-color: var(--paleBlue);
      text-indent: 40px;
      font-size: var(--font-size-M);
      :focus {
         outline: 2px solid var(--lightBlue);
      }
   }
   img {
      width: 25px;
      position: absolute;
      top: 25%;
      margin-bottom: 20px;
      left: 10px;
   }
`;
