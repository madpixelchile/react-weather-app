
import React from 'react';

import WeatherIcons from 'react-weathericons';

//Esto es para validar estrictamente de que cada propiedad o prop de cada jsx sea explicitamente de tipo número, string, etc. instalación: yarn add prop-types
import PropTypes from 'prop-types';

import { SUN, CLOUD, RAIN ,SNOW , THUNDER ,DRIZZLE} from './../../../constants/Weathers';

const icons = {
    [SUN]:        'day-sunny',
    [CLOUD]:      'cloud',
    [RAIN]:       'rain',
    [SNOW]:       'snow',
    [THUNDER]:    'day-thunderstore',
    [DRIZZLE]:    'day-showers',
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