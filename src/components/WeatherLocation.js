
import React from 'react';

import Location from './Location';
import {WeatherData} from './WeatherData';

const WeatherLocation = () =>{

    return(
        <div>
            Wheater Location
            <Location />
            <WeatherData />
        </div>
       
    );

}

export default WeatherLocation;