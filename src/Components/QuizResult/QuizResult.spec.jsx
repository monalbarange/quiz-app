import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import QuizResult from './QuizResult';
import { legacy_createStore as createStore } from "redux";

const initialState = {
  quiz: {
    currentQuestion: 0,
    score: 0,
    clickedOption: 0,
    showResult: false,
  },
};

const reducer = (state = initialState, action) => {
  return state;
};

describe('QuizResult Component', () => {
  const mockProps = {
    score: 7,
    totalScore: 10,
    tryAgain: jest.fn(),
  };

  let store;

  beforeEach(() => {
    store = createStore(reducer);
  });

  it('renders QuizResult component with score and total score', () => {
    render(
      <Provider store={store}>
        <QuizResult {...mockProps} />
      </Provider>
    );

    // Use a regular expression to search for text containing "Your Score" and the score number
    const showScoreContainer = screen.getByText(
      new RegExp(`Your Score:${mockProps.score}`)
    );

    expect(showScoreContainer).toBeInTheDocument();
  });

  it("triggers 'tryAgain' function when 'Try Again' button is clicked", () => {
    render(
      <Provider store={store}>
        <QuizResult {...mockProps} />
      </Provider>
    );

    const tryAgainButton = screen.getByRole('button', { name: 'Try Again' });

    fireEvent.click(tryAgainButton);
    expect(mockProps.tryAgain).toHaveBeenCalledTimes(1);
  });
});
