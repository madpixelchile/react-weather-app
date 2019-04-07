
import React from 'react';
import {WeatherExtraInfo} from './WeatherExtraInfo';
import {WeatherTemperature} from './WeatherTemperature';



//Uso y carga de multiples constantes en un archivo
import {FOG} from './../../../constants/Weathers';

import './weather-data.scss';

export const WeatherData = ()=>{

    return(
        <div className="weather-data-cont">
            <span className="small-title">Weather Data</span>
            
                <WeatherTemperature temperature={20} weatherstate={FOG}/>
            
            <div><WeatherExtraInfo humidity={80} wind={'10 m/s'}/></div>
        </div>
    )

}