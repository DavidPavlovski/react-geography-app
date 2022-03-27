import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './QuizForm.styles';

function QuizForm({ handleChange, handleSubmit, quizSettings }){
   return (
      <Wrapper onSubmit={handleSubmit}>
         <div>
            <label htmlFor='difficulty'>Difficulty</label>
            <select id='difficulty' name='difficulty' defaultValue={quizSettings.difficulty} onChange={handleChange}>
               <option value='easy'>easy</option>
               <option value='medium'>medium</option>
               <option value='hard'>hard</option>
            </select>
         </div>

         <div>
            <label htmlFor='num-questions'>Number of Questions</label>
            <select
               id='num-questions'
               name='numberOfQuestions'
               defaultValue={quizSettings.numberOfQuestions}
               onChange={handleChange}
            >
               <option value={10}>10</option>
               <option value={15}>15</option>
               <option value={20}>20</option>
            </select>
         </div>
         <button>Submit</button>
      </Wrapper>
   );
}
QuizForm.propTypes = {
   handleChange: PropTypes.func,
   handleSubmit: PropTypes.func,
   quizSettings: PropTypes.object
};

export default QuizForm;
