// reducer.js
import { SET_ANSWER, SET_LANGUAGE } from '../actions/actions';
const initialState = {
  questions: [], // Array of 70 questions with IDs, text in both languages, and answers.
  currentQuestionIndex: 0,
  selectedAnswers: [],
  mbtiResult: null,
  language: 'ko', // Default language is Vietnamese.
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANSWER:
      // Update state to set the user's answer for a specific question
      return {
        ...state,
        questions: state.questions.map((question) =>
          question.id === action.payload.questionId
            ? { ...question, userAnswer: action.payload.answer }
            : question
        ),
      };
    case SET_LANGUAGE:
      // Update state to set the user's selected language
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
