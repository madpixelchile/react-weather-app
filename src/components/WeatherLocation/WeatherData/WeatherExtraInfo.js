
import React from 'react';

//Esto es para validar estrictamente de que cada propiedad o prop de cada jsx sea explicitamente de tipo número, string, etc. instalación: yarn add prop-types
import PropTypes from 'prop-types';

export const WeatherExtraInfo = ({humidity, wind})=>{

    return(
        <div>
            <span className="small-title">Información extra</span>
            <div>
                <span>{humidity} %</span>
                <span>{wind} wind</span>
            </div>
        </div>
    );

}

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}