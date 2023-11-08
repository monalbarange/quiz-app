import { createSlice } from '@reduxjs/toolkit';
import { QuizData } from "../Data/QuizData";

const initialState = {
  currentQuestion: 0,
  score: 0,
  clickedOption: 0,
  showResult: false,
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
    setClickedOption: (state, action) => {
      state.clickedOption = action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
    setShowResult: (state, action) => {
      state.showResult = action.payload;
    },
    updateScore: (state) => {
      if (state.clickedOption === QuizData[state.currentQuestion].answer) {
        state.score += 1;
      }
    },
    resetAll: (state) => {
      state.showResult = false;
      state.currentQuestion = 0;
      state.clickedOption = 0;
      state.score = 0;
    },
  },
});

export const {
  setCurrentQuestion,
  setClickedOption,
  setScore,
  setShowResult,
  updateScore,
  resetAll,
} = quizSlice.actions;

export default quizSlice.reducer;