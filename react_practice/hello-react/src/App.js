import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationSample from './ValidationSample';
import MyComponent from './MyComponent';
import EventPractice from './EventPractice';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color}/>
      </div>
    );
  }
}

/*
function App() {
  return (
    <div className="App">
      <LifeCycleSample />
      <IterationSample />
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
*/

export default App;
