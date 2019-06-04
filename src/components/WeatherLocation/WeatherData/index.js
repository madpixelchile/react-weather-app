
import React from 'react';

import PropTypes from 'prop-types';

import WeatherExtraInfo from './WeatherExtraInfo';
import {WeatherTemperature} from './WeatherTemperature';

//Uso y carga de multiples constantes en un archivo
// import {FOG} from './../../../constants/Weathers';

import './weather-data.scss';

export const WeatherData = ({ finalData: {temperature, weatherState, humidity, wind} })=>{ //Destructuring con objetos con parámetros o más complejos

    // const {temperature, weatherState, humidity, wind } = finalData;

    return(
        <div className="weather-data-cont">
            <span className="small-title">Weather Data</span>
            
                <WeatherTemperature temperature={temperature} weatherstate={weatherState}/>
            
            <div><WeatherExtraInfo humidity={humidity} wind={wind}/></div>
        </div>
    )

}


//Esto es para validar estrictamente de que cada propiedad o prop de cada jsx sea explicitamente de tipo número, string, etc.
WeatherData.propTypes = {
    finalData: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};