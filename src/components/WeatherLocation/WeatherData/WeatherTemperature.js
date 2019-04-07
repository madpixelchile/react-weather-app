
import React from 'react';

import WeatherIcons from 'react-weathericons';

//Esto es para validar estrictamente de que cada propiedad o prop de cada jsx sea explicitamente de tipo número, string, etc. instalación: yarn add prop-types
import PropTypes from 'prop-types';

import {FOG, CLOUDY, SUN} from './../../../constants/Weathers';

const icons = {
    [FOG]:    'fog',
    [CLOUDY]: 'cloudy',
    [SUN]:    'day-sunny'
}

const getWeatherIcon = weatherstate =>{

    let icon = icons[weatherstate];

    if(icon)
        return <WeatherIcons name={icon} size="2x"/>;
    else
        return <WeatherIcons name={'day-sunny'} size={'2x'} />;
}

export const WeatherTemperature = ({temperature, weatherstate})=>(

    
    <div className="weather-value-conts">
        <div>{getWeatherIcon(weatherstate)}</div>
        <div><span className="text-degrees">{temperature} Cº</span></div>
    </div>

);

//Esto es para validar estrictamente de que cada propiedad o prop de cada jsx sea explicitamente de tipo número, string, etc.
WeatherTemperature.propTypes = {

    temperature: PropTypes.number.isRequired,
    weatherstate: PropTypes.string.isRequired,

};