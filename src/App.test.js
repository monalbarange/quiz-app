// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// describe('App Component', () => {
//   test('renders App component with Quiz', () => {
//     render(<App />);
    
//     // Check if the main container is rendered
//     const appContainer = screen.getByText(/App/i);
//     expect(appContainer).toBeInTheDocument();

//     // Check if the Quiz component is present
//     const quizComponent = screen.getByText(/Quiz/i);
//     expect(quizComponent).toBeInTheDocument();
//   });
// });

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders App component with Quiz', () => {
    render(<App />);
    
    // Check if the main container is rendered
    const appContainer = screen.getByText(/App/i);
    expect(appContainer).toBeInTheDocument();

    // Check if the Quiz component is present
    const quizComponent = screen.getByText(/Quiz/i);
    expect(quizComponent).toBeInTheDocument();
  });
});
