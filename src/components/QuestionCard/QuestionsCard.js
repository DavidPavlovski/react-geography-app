import React from 'react';

import PropTypes from 'prop-types';
import { Answer, Wrapper, Navigation, Button } from './QuestionCard.styles';

function QuestionsCard({
   questions,
   question,
   questionNumber,
   numberOfQuestions,
   currentQuestion,
   navigateQuestions,
   setAnswer,
   lockAnswer,
   finishQuiz,
   gameOver,
   startNewGame
}){
   function disablePrevButton(){
      if (questionNumber === 0) {
         return true;
      }
      return false;
   }

   function disableNextButton(){
      if (questionNumber === numberOfQuestions - 1) {
         return true;
      }
      return false;
   }

   function handleSetAnswer(e){
      if (question.locked) return;
      setAnswer(e, question);
   }

   return (
      <Wrapper>
         <h2 dangerouslySetInnerHTML={{ __html: `${questionNumber + 1}.) ${question.question}` }} />
         {question.answers.map((answer, i) => (
            <Answer
               key={i}
               value={answer}
               dangerouslySetInnerHTML={{ __html: answer }}
               onClick={handleSetAnswer}
               userAnswer={question.userAnswer}
               correctAnswer={question.correct_answer}
               gameOver={gameOver}
               className={`${gameOver &&
                  (question.correct && question.userAnswer === answer
                     ? 'correct'
                     : question.userAnswer === answer && !question.correct ? 'incorrect' : ' ')}
                    ${gameOver && !question.correct && question.correct_answer === answer && 'correct'}
                     `}
            />
         ))}
         <Navigation>
            <button disabled={question.userAnswer === '' || question.locked} onClick={() => lockAnswer(question)}>
               Submit question
            </button>
            <div>
               <button
                  disabled={disablePrevButton()}
                  value={-1}
                  onClick={(e) => navigateQuestions(parseInt(e.target.value))}
               >
                  Previous
               </button>
               <button
                  disabled={disableNextButton()}
                  value={1}
                  onClick={(e) => navigateQuestions(parseInt(e.target.value))}
               >
                  Next
               </button>
            </div>
         </Navigation>
         {gameOver ? (
            <Button onClick={startNewGame}>New Game</Button>
         ) : (
            <Button
               style={{ display: currentQuestion === numberOfQuestions - 1 ? 'block' : 'none' }}
               disabled={!questions.every((q) => q.userAnswer)}
               onClick={finishQuiz}
            >
               Finish quiz
            </Button>
         )}
      </Wrapper>
   );
}

QuestionsCard.propTypes = {
   question: PropTypes.object,
   questionNumber: PropTypes.number,
   numberOfQuestions: PropTypes.number,
   currentQuestion: PropTypes.number,
   navigateQuestions: PropTypes.func,
   setAnswer: PropTypes.func,
   questions: PropTypes.array,
   finishQuiz: PropTypes.func,
   gameOver: PropTypes.bool,
   startNewGame: PropTypes.func
};
export default QuestionsCard;
