import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import {Grid, Row, Col} from 'react-flexbox-grid';

import LocationList from './components/LocationList';

import ForecastExtended from './components/ForecastExtended';

import './base-styles/main.scss';


const cities = [
  'Santiago, CL',
  'Washington,us',
  'Madrid,es',
  'Buenos Aires,ar',
]


class App extends Component {


  constructor(){
    super();

    this.state = {
      ciudad: null,
    }

  }

  handleSelectedLocation = (city)=>{
      // console.log("handleSelectedLocation" + city);

      // toke = city;

      // console.log(toke);

      // return(
      //   city
      // )

      this.setState({
          ciudad: ' ' + city,
      });

  }


  render() {

    const {ciudad} = this.state;

    return (

        <Grid>

            <Row>

              <Col xs={12}>
                
                <AppBar position={`sticky`}>

                  <Toolbar>
                    <span>Wheather APP</span>
                  </Toolbar>

                </AppBar>

              </Col>

            </Row>

            <Row>
                <Col xs={12} md={4}>

                    {/* <WeatherLocation city={'Santiago, CL'}/> */}
                    <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>

                </Col>

                <Col xs={12} md={4}>
                    <div className={`details`}>
                        { !ciudad ? <h4>No se ha seleccionado ciudad aún</h4> : <ForecastExtended city={ciudad}/> }
                    </div>
                </Col>
            </Row>
        </Grid>
    );
  }
}

export default App;
