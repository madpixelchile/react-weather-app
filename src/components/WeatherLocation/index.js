
import React, { Component } from 'react';

import Location from './Location';
import {WeatherData} from './WeatherData';

import{FOG} from './../../constants/Weathers';

const data = {
    temperature: 15,
    weatherState: FOG,
    humidity: 10,
    wind: '10 m/s',
}

class WeatherLocation extends Component {

    render(){
        return(
            <div>
                <Location city={'chile'}/>
                <WeatherData finalData={data}/>
            </div>
           
        );
    };

}

export default WeatherLocation;