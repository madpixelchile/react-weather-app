import React, { Component } from 'react';

import LocationList from './components/LocationList';

import './base-styles/main.scss';


const cities = [
  'Santiago, CL',
  'Washington,us',
  'Madrid,es',
  'Buenos Aires,ar',
]

class App extends Component {


  handleSelectedLocation = (city)=>{
      console.log("handleSelectedLocation" + city);
  }


  render() {
    return (
      <div className="App">
          {/* <WeatherLocation city={'Santiago, CL'}/> */}
          <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>
      </div>
    );
  }
}

export default App;
