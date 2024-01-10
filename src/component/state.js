import QA from  "../assets/QA.json";

const initialState = {
    questions: QA, // Array of 70 questions with IDs, text in both languages, and answers.
    currentQuestionIndex: 0,
    selectedAnswers: [],
    mbtiResult: null,
    language: 'vi', // Default language is Vietnamese.
  };

export default initialState;