

import React from 'react';

import PropTypes from 'prop-types';

import WeatherLocation from './WeatherLocation';



const LocationList = ({ cities , onSelectedLocation})=>{

    const handleWeatherLocationClick = city =>{
        console.log(`handleWeatherLocationClick ${city}`);
        onSelectedLocation(city);

        //Esta función autoejecutable se está pasando a través de una Prop del JSX, el la prop de JSX se está invocando con el argumento de city,
        //El cual entrará en la función y pasará también a otra invocación de función llamada "onsSelectedLocation"

    }

    const strToComponents = cities =>( //64 importante y revisar nuevamente.
        cities.map( (city) =>   //En este caso vamos a utilizar una clave natural para que el componente no dependa de un número de posición
                                // por lo que estaremos descartando el índice y utilizaremos el objeto en sí.
                                //Esto es para evitar fatiga por parte de react al momento de actualizar y sumar otro componente en la lista
            <WeatherLocation 
                key={city}
                city={city}
                onWeatherLocationClick={ () => handleWeatherLocationClick(city) }  //El resultado de esta función pasará a través del prop de este JSX <WeatherLocation/>
            />
        )
    );

    // console.log(cities)
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