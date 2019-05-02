
import React, { Component } from 'react';

import Location from './Location';
import {WeatherData} from './WeatherData';

import{FOG} from './../../constants/Weathers';


const location = "Santiago, CL";
const api_key = "7332e4793f6b1ffdf08f63d552ddc17d";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";


const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;


const data = {
    temperature: 15,
    weatherState: FOG,
    humidity: 10,
    wind: '10 m/s',
}


class WeatherLocation extends Component {

    //Es el constructor en donde comienza la construcción de un componente ESTABLECIENDO EL ESTADO INICIAL DEL COMPONENTE
    constructor(){
        super(); //Para que el constructor funcione correctamente. el super constructor es el constructor del componente base
        this.state ={ //State es algo propio de los componentes tipo clase. Es el estado local de nuestro componente.
            city: 'santiago de chile',
            data: data,
        }
    }

    handleUpdateClick = () =>{ //Esta función corresponde a los eventos que ocurrirán después de generado el click. Siempre dentro ->
        // de una función tipo clase debemos de ocupar el this para referenciar asi mismo al elemento.
        
        //Consulta api rest con Fetch, también se puede usar axios, pero fetch nativo de react (viene con react).

        fetch(api_weather).then(resolve =>{

            return resolve.json();

        }).then(data =>{

            console.log(data);
            // debugger;

        })
        
        this.setState({ //Para actualizar lo que está en el state siempre debe de ser aplicado el "setState".
            city: 'SANTIAGO DE CHILE',
        });

        console.log(this.state.city);

    }

    render(){

        const {city, data} = this.state;

        return(
            <div className="WeatherLocationCont">
                <Location city={city}/>
                <WeatherData finalData={data}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    };

}

export default WeatherLocation;