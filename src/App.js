import React, { Component } from 'react';
import './App.css';
import route from './route.js';
import Nav from './components/FunctionalComps/Nav/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {route}
      </div>
    );
  }
}

export default App;
