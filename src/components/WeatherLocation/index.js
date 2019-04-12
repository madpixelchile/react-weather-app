
import React from 'react';

import Location from './Location';
import {WeatherData} from './WeatherData';

import{FOG} from './../../constants/Weathers';

const data = {
    temperature: 15,
    weatherState: FOG,
    humidity: 10,
    wind: '10 m/s',
}



const WeatherLocation = () =>{

    return(
        <div>
            <Location city={'chile'}/>
            <WeatherData finalData={data}/>
        </div>
       
    );

}

export default WeatherLocation;