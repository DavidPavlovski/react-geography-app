import { useState } from 'react';

import QUIZ_API from '../QUIZ_API';

const useQuiz = () => {
   const [ loading, setLoading ] = useState(false);
   const [ error, setError ] = useState(false);
   const [ errorMsg, setErrorMsg ] = useState('');
   const [ questions, setQuestions ] = useState([]);

   const fetchQuestions = async (numberOfQuestions, difficulty) => {
      try {
         setLoading(true);
         setError(false);
         setErrorMsg('');
         const data = await QUIZ_API.fetchQuestions(numberOfQuestions, difficulty);
         if (!data.length) {
            throw Error('Somethig went wrong');
         }
         setLoading(false);
         setQuestions(data);
      } catch (e) {
         setError(true);
         setLoading(false);
         setErrorMsg(e.message);
      }
   };

   return { loading, error, errorMsg, questions, setQuestions, fetchQuestions };
};

export default useQuiz;
