
import React, { Component } from 'react';

import Location from './Location';
import {WeatherData} from './WeatherData';

import{FOG} from './../../constants/Weathers';


const location = "Santiago, CL";
const api_key = "7332e4793f6b1ffdf08f63d552ddc17d";
const url_base_weather = "https://samples.openweathermap.org/data/2.5/weather";


const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;


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