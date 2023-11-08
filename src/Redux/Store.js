import { configureStore } from '@reduxjs/toolkit';
import quizReducer from "../Redux/QuizSlice";

const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export default store;