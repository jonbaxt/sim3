import React, { Component } from 'react';
import './App.css';
import route from './route.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        {route}
      </div>
    );
  }
}

export default App;
