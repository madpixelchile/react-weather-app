
import React from 'react';
import {WeatherExtraInfo} from './WeatherExtraInfo';
import {WeatherTemperature} from './WeatherTemperature';

export const WeatherData = ()=>{

    return(
        <div>
            <div>Weather Data</div>
            <div><WeatherTemperature temperature={20} watherstate={'fog'}/></div>
            <div><WeatherExtraInfo humidity={80} wind={'10 m/s'}/></div>
        </div>
    )

}