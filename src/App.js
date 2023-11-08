import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './Redux/Store';
import Quiz from './Components/Quiz/Quiz';

function App() {
  return (
    <Provider store={store}>
      <div data-testid="app-component">
        <Quiz />
      </div>
    </Provider>
  );
}

export default App;