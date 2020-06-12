import React, { Component } from 'react';
import CounterContainer from './components/CounterContainer';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <CounterContainer />
      </div>
    );
  }
}
   
export default App;
