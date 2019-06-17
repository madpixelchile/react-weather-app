
import React from 'react';

import PropTypes from 'prop-types';

import WeatherData from './../WeatherLocation/WeatherData/';

// const data = {
//     temperature: 10,
//     humidity: 10,
//     weatherState: 'normal',
//     wind: 'normal',
// }

const ForecastItem = ({weekDay, hour, data})=>{ // es lo mismo que el siguiente comentado, con la diferencia es que con llaves podermos incorporar mas de una linea

    // if(toke){
        return(
            <div>
                <div className={`text-date`}>
                    <span>Día: {weekDay}</span>
                    <span>Hora: {hour} hrs.</span>
                </div>
                <WeatherData data={data}></WeatherData>
            </div>
        )
    // }
}

// const ForecastItem = ()=>( //Este permite una línea de código y no requiere return. Para mí es más completo con las llaves y return. No se si afecta en performance.
//     <div>Item</div>
// )


ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
}

export default ForecastItem;