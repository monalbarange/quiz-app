import React from 'react';
import { Box, Typography } from '@mui/material';
import { QuizData } from "../../Data/QuizData";
import QuizResult from "../QuizResult/QuizResult";
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentQuestion,
  setClickedOption,
  // setScore,
  setShowResult,
  updateScore,
  resetAll,
} from "../../Redux/QuizSlice";

const Quiz = () => {
  const dispatch = useDispatch();
  const { currentQuestion, score, clickedOption, showResult } = useSelector((state) => state.quiz);

  const changeQuestion = () => {
    dispatch(updateScore());
    if (currentQuestion < QuizData.length - 1) {
      dispatch(setCurrentQuestion(currentQuestion + 1));
      dispatch(setClickedOption(0));
    } else {
      dispatch(setShowResult(true));
    }
  };

  const resetQuiz = () => {
    dispatch(resetAll());
  };

  return (
    <Box>
      <Typography variant="h3" className="heading-txt">
        Quiz App
      </Typography>
      <Box className="container">
        {showResult ? (
          <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetQuiz} />
        ) : (
          <>
            <Box className="question">
              <span id="question-number">{currentQuestion + 1}.</span>
              <span id="question-txt" data-testid="question-txt">
                {QuizData[currentQuestion].question}
              </span>
            </Box>
            <Box className="option-container">
              {QuizData[currentQuestion].options.map((option, i) => (
                <button
                  key={i}
                  className={`option-btn ${clickedOption === i + 1 ? 'checked' : null}`}
                  onClick={() => dispatch(setClickedOption(i + 1))}
                >
                  {option}
                </button>
              ))}
            </Box>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion} />
          </>
        )}
      </Box>
    </Box>
  );
};

export default Quiz;
