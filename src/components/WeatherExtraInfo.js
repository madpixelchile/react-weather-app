
import React from 'react';

export const WeatherExtraInfo = ({humidity, wind})=>{

    return(
        <div>
            <div>Información extra</div>
            <div>
                <span>{humidity} %</span>
                <span>{wind} wind</span>
            </div>
        </div>
    );

}