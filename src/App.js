import React, { Component } from 'react';

import WeatherLocation from './components/WeatherLocation';

import './base-styles/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <WeatherLocation city={'Santiago de Chile'}/>
      </div>
    );
  }
}

export default App;
