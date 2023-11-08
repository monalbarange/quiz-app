// components/QuizResult/QuizResult.jsx
import React from 'react';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { resetAll } from '../../Redux/QuizSlice';

const QuizResult = (props) => {
  const dispatch = useDispatch();

  const resetQuiz = () => {
    dispatch(resetAll());
  };

  return (
    <>
      <Box className="show-score">
        Your Score:{props.score}
        <br />
        Total Score:{props.totalScore}
      </Box>
      <button id="next-button" onClick={props.tryAgain || resetQuiz}>
        Try Again
      </button>
    </>
  );
};

export default QuizResult;
