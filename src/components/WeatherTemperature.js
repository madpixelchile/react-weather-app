
import React from 'react';

import WeatherIcons from 'react-weathericons';

const icons = {
    sunny: 'day-sunny',
    fog: 'day-fog',

}

const getWeatherIcon = (weatherstate) =>{

    const icon = icons[weatherstate];

    if(icon)
        return <WeatherIcons name={icon} size="2x"/>;
    else
        return <WeatherIcons name={'por defecto'} size={'2x'} />;
}

export const WeatherTemperature = ({weatherstate, temperature})=>(
    <div>
        {
            getWeatherIcon(weatherstate)
            
        }
        <span>{temperature} Cº</span>
    </div>
);