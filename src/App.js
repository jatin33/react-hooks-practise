import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountDownTimer from './CountDownTimer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CountDownTimer time={10} />
      </header>
    </div>
  );
}

export default App;
