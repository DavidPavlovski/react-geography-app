const BASE_URL = 'https://opentdb.com/api.php?';

const shuffleArray = (arr) => {
   return [ ...arr ].sort(() => Math.random() - 0.5);
};

const api_settings = {
   fetchQuestions: async function(numberOfQuestions, difficulty){
      const endpoint = `${BASE_URL}amount=${numberOfQuestions}&category=22&difficulty=${difficulty}&type=multiple`;
      const data = await (await fetch(endpoint)).json();
      return data.results.map((q) => ({
         ...q,
         answers: shuffleArray([ ...q.incorrect_answers, q.correct_answer ]),
         userAnswer: '',
         locked: false,
         correct: null
      }));
   }
};

export default api_settings;
