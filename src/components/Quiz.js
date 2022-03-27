import React, { useState } from 'react';
import useQuiz from '../hooks/useQuiz';
import QuestionsCard from './QuestionCard/QuestionsCard';
import QuizForm from './QuizForm/QuizForm';
import { Spinner } from './Spinner/Spinner.styles';

function Quiz(){
   const [ score, setScore ] = useState(0);
   const [ currentQuestion, setCurrentQuestion ] = useState(0);
   const [ gameStarted, setGameStarted ] = useState(false);
   const [ gameOver, setGameOver ] = useState(false);
   const { loading, error, errorMsg, questions, setQuestions, fetchQuestions } = useQuiz();
   const [ quizSettings, setQuizSettings ] = useState({ numberOfQuestions: 10, difficulty: 'easy' });

   const handleChange = (e) => {
      setQuizSettings((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
   };

   function navigateQuestions(val){
      setCurrentQuestion((prev) => (prev += val));
   }

   const handleSubmit = async (e) => {
      const { numberOfQuestions, difficulty } = quizSettings;
      e.preventDefault();
      await fetchQuestions(numberOfQuestions, difficulty);
      setGameStarted(true);
   };

   const setAnswer = (e, question) => {
      setQuestions((prevState) =>
         prevState.map(
            (prev) => (prev.question !== question.question ? prev : { ...question, userAnswer: e.target.value })
         )
      );
   };

   const lockAnswer = (question) => {
      if (currentQuestion < questions.length - 1) {
         setCurrentQuestion((prev) => prev + 1);
      }
      setQuestions((prevState) =>
         prevState.map((prev) => (prev.question !== question.question ? prev : { ...question, locked: true }))
      );
   };

   const finishQuiz = () => {
      setGameOver(true);
      setCurrentQuestion(0);
      setQuestions((prevState) =>
         prevState.map((p) => ({ ...p, locked: true, correct: p.userAnswer === p.correct_answer }))
      );
      let newScore = 0;
      questions.forEach((q) => {
         if (q.correct_answer === q.userAnswer) {
            switch (quizSettings.difficulty) {
               case 'easy':
                  newScore += 10;
                  break;
               case 'medium':
                  newScore += 15;
                  break;
               case 'hard':
                  newScore += 20;
                  break;
               default:
                  newScore += 0;
                  break;
            }
         }
      });
      setScore(newScore);
   };

   const startNewGame = () => {
      setGameStarted(false);
      setGameOver(false);
      setCurrentQuestion(0);
      setScore(0);
   };

   if (loading) {
      return <Spinner />;
   }

   if (error) {
      return (
         <div>
            <h1>{errorMsg}</h1>
         </div>
      );
   }

   return (
      <React.Fragment>
         {gameOver && <h1 style={{ textAlign: 'center' }}>You scored {score} points here are your results</h1>}
         {!gameStarted ? (
            <QuizForm handleChange={handleChange} handleSubmit={handleSubmit} quizSettings={quizSettings} />
         ) : (
            <QuestionsCard
               question={questions[currentQuestion]}
               questionNumber={currentQuestion}
               numberOfQuestions={questions.length}
               currentQuestion={currentQuestion}
               navigateQuestions={navigateQuestions}
               setAnswer={setAnswer}
               lockAnswer={lockAnswer}
               questions={questions}
               finishQuiz={finishQuiz}
               gameOver={gameOver}
               startNewGame={startNewGame}
            />
         )}
      </React.Fragment>
   );
}

export default Quiz;
