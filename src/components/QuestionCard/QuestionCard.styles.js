import styled from 'styled-components';

export const Wrapper = styled.div`
   padding: 20px;
   text-align: center;
   margin: 75px auto;
   width: 60%;
   background-color: var(--lightBlue);
   border: 5px solid var(--Blue);
   border-radius: 10px;

   @media screen and (max-width: 760px) {
      width: 100%;
   }

   .incorrect {
      border: 3px solid #a30000;
      background-color: #ff8975;
      color: var(--white);
   }
   .correct {
      border: 3px solid #008633;
      background-color: #86de9f;
   }
`;

export const Answer = styled.button`
   display: block;
   background-color: ${({ userAnswer, value, gameOver }) => !gameOver && userAnswer === value && 'var(--blue)'};
   border-radius: 10px;
   border: ${({ userAnswer, value }) => (userAnswer === value ? '3px solid var(--darkBlue)' : '3px solid #000')};
   color: ${({ userAnswer, value }) => userAnswer === value && 'var(--white)'};
   margin: 10px auto;
   width: 70%;
   padding: 10px 0;
   font-size: var(--font-size-M);
`;

export const Navigation = styled.div`
   margin-top: 50px;
   display: flex;
   justify-content: space-between;
   align-items: center;

   button {
      width: 200px;
      height: 40px;
      font-size: var(--font-size-M);
   }
   div button {
      margin-left: 10px;
   }

   @media screen and (max-width: 760px) {
      button {
         width: fit-content;
         font-size: var(--font-size-S);
      }
   }
`;

export const Button = styled.button`
   margin: 0 auto;
   margin-top: 10px;
   width: 80%;
   padding: 10px 0;
   font-weight: 600;
   font-size: var(--font-size-M);
`;
