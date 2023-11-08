import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Quiz from "./Quiz";
import { QuizData } from '../../Data/QuizData';

const initialState = {
  quiz: {
    currentQuestion: 0,
    score: 0,
    clickedOption: 0,
    showResult: false,
  },
};

const mockStore = {
  getState: () => initialState,
  subscribe: () => {},
  dispatch: jest.fn(),
};

test('Renders the Quiz component and displays the title', () => {
  render(
    <Provider store={mockStore}>
      <Quiz />
    </Provider>
  );

  expect(screen.getByText('Quiz App')).toBeInTheDocument();
});

test('Displays the question and options when showResult is false', () => {
  render(
    <Provider store={mockStore}>
      <Quiz />
    </Provider>
  );

  expect(screen.getByTestId('question-txt')).toBeInTheDocument();

  const currentQuestion = initialState.quiz.currentQuestion;
  const options = QuizData[currentQuestion].options;

  options.forEach((option) => {
    expect(screen.getByText(option)).toBeInTheDocument();
  });
});