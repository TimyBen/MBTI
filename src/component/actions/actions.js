export const startTest = () => ({ type: 'START_TEST' });
export const SET_ANSWER = 'SET_ANSWER';
export const SET_RESULT = 'SET_RESULT';
export const SET_QUESTION = 'SET_QUESTION';
export const SET_LANGUAGE = 'SET_LANGUAGE';

export const setAnswer = (questionId, answer) => ({
  type: SET_ANSWER,
  payload: { questionId, answer },
});

export const setResult = (result) => ({
  type: SET_RESULT,
  payload: result,
});

export const answerQuestion = (answer) => ({
  type: 'ANSWER_QUESTION',
  payload: answer,
});

export const calculateResult = () => ({ type: 'CALCULATE_RESULT' });

export const setQuestion = (question) => ({ 
  type: SET_QUESTION,
  payload: question,
});

export const setLanguage = (language) => ({
  type: 'SET_LANGUAGE',
  payload: language,
});