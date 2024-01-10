import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import QA from "../assets/QA.json";


const QuestionPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [searchParams] = useSearchParams();
  const languageFromURL = searchParams.get('language');
  const [mbtiType, setMbtitype] = useState([]);

  useEffect(() => {
    setLoading(true);

    const qst = QA[languageFromURL];

    if (Array.isArray(qst)) {
      setQuestions(qst);
      initializeAnswersArray(qst.length);
    } else {
      console.error("Invalid data format for questions:", qst);
    }

    setLoading(false);
  }, [languageFromURL]);

  const initializeAnswersArray = (length) => {
    const initialAnswers = Array.from({ length }, () => null);
    setSelectedAnswers(initialAnswers);
    console.log("initials: ",initialAnswers);
  };

  const submitAnswers = (selectedAnswers) => {
    console.log('clicked')
    if (selectedAnswers.includes(null)) {
      alert('Please answer all questions before submitting!');
      return;
    }

    let mbtiType = '';
    const countArr = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    console.log('countArr')
    for (let i = 0; i < selectedAnswers.length; i++) {
      const answer = selectedAnswers[i];
      // const type = answer.charAt(0); // Assuming answer format is like "A", "B", etc.

      switch (i % 7) {
        case 0:
          countArr.E += answer === 'A' ? 1 : 0;
          countArr.I += answer === 'B' ? 1 : 0;
          break;
        case 1:
        case 2:
          countArr.S += answer === 'A' ? 1 : 0;
          countArr.N += answer === 'B' ? 1 : 0;
          break;
        case 3:
        case 4:
          countArr.T += answer === 'A' ? 1 : 0;
          countArr.F += answer === 'B' ? 1 : 0;
          break;
        case 5:
        case 6:
          countArr.J += answer === 'A' ? 1 : 0;
          countArr.P += answer === 'B' ? 1 : 0;
          break;
        default:
          break;
      }
    }
    // Convert the dichotomies into MBTI type
    mbtiType += countArr.E > countArr.I ? 'E' : 'I';
    mbtiType += countArr.S > countArr.N ? 'S' : 'N';
    mbtiType += countArr.T > countArr.F ? 'T' : 'F';
    mbtiType += countArr.J > countArr.P ? 'J' : 'P';
    console.log('Selected Answers:', selectedAnswers);
    console.log('MBTI Type:', mbtiType);
    setMbtitype(mbtiType)
    // setShowModal(true);
    // return mbtiType
  };

  const handleAnswer = (questionId, optionKey) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] =  optionKey ;
    setSelectedAnswers(newAnswers);
    console.log("New: ", newAnswers);
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      if (selectedAnswers[currentQuestionIndex] === null) {
        alert('Please select an answer before proceeding to the next question!')
      }
      else{
      updateAnswerIfChanged();
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      };
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const updateAnswerIfChanged = () => {
    const currentAnswer = selectedAnswers[currentQuestionIndex];
    const previousAnswer = selectedAnswers[currentQuestionIndex - 1];

    if (previousAnswer !== null && previousAnswer !== undefined && currentAnswer !== null && currentAnswer !== undefined) {
      if (previousAnswer !== currentAnswer) {
        console.log(`Answer for question ${currentQuestionIndex + 1} has changed from ${previousAnswer} to ${currentAnswer}`);
      }
    }
  };

  const handleSwipe = (event) => {
    // You can adjust the sensitivity by changing the deltaX threshold
    const deltaX = event.deltaX;

    if (deltaX > 100) {
      // Swipe from left to right, navigate back
      // eslint-disable-next-line no-restricted-globals
      history.goBack();
    }
  };

  return (
    <div className='w-full' onTouchMove={handleSwipe}>
      <div className='w-full flex flex-row justify-center items-center'>
        <div className='absolute top-14 flex text-center justify-center items-center w-full'>
          <div className='w-full px-6 py-6 font-extrabold flex flex-row justify-between items-center font-serif  text-3xl h-20'>
            <div className='flex justify-center items-center'>
              <a href='/'>
                <button className='text-3xl text-center text-blue-500'>{'<'}</button>
              </a>
            </div>
            <div className='flex flex-grow justify-center items-center'>
              <h1 className='text-center'>MBTI Questions</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className='h-26 mt-32'></div>
      {loading ? (
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">Loading questions...</svg>
      ) : (
        questions && questions.length > 0 ? (
          <div className='h-full w-full'>
            <form>
              <div className='p-4 justify-center items-center flex flex-col w-96'>
                <p className='mb-8 rounded-lg leading-10 bg-green-700 text-2xl text-center font-bold justify-center items-left w-full'>
                  {questions[currentQuestionIndex].Q}
                </p>
                <div className='h-12'></div>
                {Object.keys(questions[currentQuestionIndex].options).map((key) => (
                  <label className='w-full text-center text-lg justify-center flex items-center' key={key}>
                    {/* <div> */}
                      <input
                        className='default-radio hidden gap-12'
                        id="default-radio-1"
                        type="radio"
                        name={`question_${questions[currentQuestionIndex].id}`}
                        value={[key]}
                        onChange={() => handleAnswer(
                          `question_${questions[currentQuestionIndex].id}`,
                          key
                        )}
                      />
                    {/* </div> */}
                    <div className='h-28 w-full'>
                    <div  className='w-full rounded-md hover:text-white border active:bg-green-700 border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'>
                      <div onClick={goToNextQuestion} className='w-full hover justify-center tracking-normal mt-2 mb-2 rounded-2xl border bg-green-700 text-lg flex items-center'>
                        {questions[currentQuestionIndex].options[key]}
                      </div>
                    </div>
                    </div>
                  </label>
                ))}
              </div>
            </form>
            <div className='pt-16'>
              {currentQuestionIndex < questions.length - 1 ? (
                <div className='flex flex-row justify-between items-center mt-12'>
                  <button
                    onClick={goToPreviousQuestion}
                    className='bottom-0 rounded-3xl top-12  text-indigo-900 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'
                  >
                    Previous Question
                  </button>
                  <button
                    onClick={goToNextQuestion}
                    className='bottom-0 rounded-3xl top-12  text-indigo-900 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'

                  >
                      Next Question
                    </button>
                  </div>
              ) : (
                <div
                  onClick={() => submitAnswers(selectedAnswers)}
                  className='bottom-0 rounded-3xl top-12 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800'
                >
                  <a href={`/personality-types?language=${languageFromURL}&mbti=${mbtiType}`}>
                    Submit Answers
                  </a>
                </div>
              )}
            </div>
          </div>
        ) : (
          <p>No questions available.</p>
        )
      )}
      </div>
      {/* <div className='absolute top-0 h-full transition duration-75 ease-in-out'>
        {showModal && (
          <Modal
            mbtiType={``}
            onClose={closeModal}
          />
        )}
      </div> */}
    </div>
  );
};

export default QuestionPage;
