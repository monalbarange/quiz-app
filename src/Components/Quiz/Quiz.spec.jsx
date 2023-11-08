import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Quiz from "./Quiz"; // Update the path according to your folder structure

// Mock the Redux store and provide it to the component
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
  dispatch: jest.fn(), // Use a Jest mock function
};

test('Renders the Quiz component and displays the title', () => {
  render(
    <Provider store={mockStore}>
      <Quiz />
    </Provider>
  );

  expect(screen.getByText('Quiz App')).toBeInTheDocument();
});

test('Handles "Next" button click and changes the question', () => {
  render(
    <Provider store={mockStore}>
      <Quiz />
    </Provider>
  );

  const nextButton = screen.getByRole('button', { name: /Next/i });
  fireEvent.click(nextButton);

  // Add expectations here for the change in the question, you may need to check the updated Redux state
});

test('Displays the question and options when showResult is false', () => {
  render(
    <Provider store={mockStore}>
      <Quiz />
    </Provider>
  );

  expect(screen.getByTestId('question-txt')).toBeInTheDocument();
  // Add expectations here for the options and question display
});

