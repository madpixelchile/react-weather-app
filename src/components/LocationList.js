

import React from 'react';

import PropTypes from 'prop-types';

import WeatherLocation from './WeatherLocation';



const LocationList = ({ cities , onSelectedLocation})=>{

    const handleWeatherLocationClick = city =>{
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    }

    const strToComponents = cities =>( //64 importante y revisar nuevamente.
        cities.map( (city) =>   //En este caso vamos a utilizar una clave natural para que el componente no dependa de un número de posición
                                // por lo que estaremos descartando el índice y utilizaremos el objeto en sí.
                                //Esto es para evitar fatiga por parte de react al momento de actualizar y sumar otro componente en la lista
            <WeatherLocation 
                key={city}
                city={city}
                onWeatherLocationClick={ () => handleWeatherLocationClick(city) }
            />
        )
    );

    console.log(cities)
    return(
        <div>
            {/* <WeatherLocation city={'Santiago, CL'}/>
            <WeatherLocation city={'Buenos Aires,ar'}/>
            <WeatherLocation city={'Mexico,mex'}/> */}
            {
                strToComponents(cities)
            }
        </div>
    )

}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;