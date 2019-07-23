import React from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationSample from './ValidationSample';
import MyComponent from './MyComponent';
import EventPractice from './EventPractice';
import ScrollBox from './ScrollBox';

function App() {
  return (
    <div className="App">
      <ScrollBox />
      <ValidationSample />
      <EventPractice />
      <MyComponent 
        age={28}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
