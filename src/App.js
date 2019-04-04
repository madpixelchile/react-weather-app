import React, { Component } from 'react';

import WeatherLocation from './components/WeatherLocation';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <span>Aplicación en react</span>
          <WeatherLocation city={'Santiago dd'}/>
      </div>
    );
  }
}

export default App;
