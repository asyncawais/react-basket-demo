import React from 'react';
import BasketContainer from './containers/BasketContainer';
import { APP_HEADING } from './constants';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{ APP_HEADING }</h1>
      </header>
      <BasketContainer />
    </div>
  );
}

export default App;