
import React, { Component } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import {PropTypes} from 'prop-types';

import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';

import transformWeather from './../../services/transformWeather';

// import {api_weather} from './../../constants/api_url';

import Location from './Location';
import WeatherData from './WeatherData';
// import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';

import './WeatherLocation.scss';

// import{FOG} from './../../constants/Weathers';



// const data = {
//     temperature: 15,
//     weatherState: FOG,
//     humidity: 10,
//     wind: '10 m/s',
// }

class WeatherLocation extends Component {

    //Es el constructor en donde comienza la construcción de un componente ESTABLECIENDO EL ESTADO INICIAL DEL COMPONENTE
    constructor(props){
        super(props); //Para que el constructor funcione correctamente. el super constructor es el constructor del componente base

        const {city} = props;


        this.state ={ //State es algo propio de los componentes tipo clase. Es el estado local de nuestro componente.
            city,
            data: null,
        }

        // console.log('constructor');

    }

    componentDidMount(){
        //El componente se montó
        // console.log('component Did Mount');
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState){
        //El componente se actualizó
        // console.log('component Did Update');
    }


    // componentWillMount(){
        //Componente será montado
    //     console.log('UNSAFE component Will mount');
    // }   


    // componentWillUpdate(nextProps, nextState){
        //El componente será actualizado
    //     console.log('UNSAFE component Will Update');
    // }


//CLASE 47

    handleUpdateClick = () =>{ //Esta función corresponde a los eventos que ocurrirán después de generado el click. Siempre dentro ->
        // de una función tipo clase debemos de ocupar el this para referenciar asi mismo al elemento.
        // console.log('toke');

        const api_weather = getUrlWeatherByCity(this.state.city);
        
        //Consulta api rest con Fetch, también se puede usar axios, pero fetch nativo de react (viene con react).
        fetch(api_weather).then(resolve =>{

            return resolve.json();

        }).then(data =>{
            
            const newWeather = transformWeather(data);

            // console.log(newWeather);
            // debugger;

            this.setState({

                data: newWeather,

            });

        })
        
        this.setState({ //Para actualizar lo que está en el state siempre debe de ser aplicado el "setState".
            city: this.props.city,
        });

        // console.log(this.state.city);

    }

    render(){

        const {onWeatherLocationClick} = this.props;

        // console.log('render');

        const {city, data} = this.state;

        return(
            <div className="WeatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}/>
                {
                    data ? <WeatherData data={data}/> : <CircularProgress size={50}/> 
                } 
                {/* <button onClick={this.handleUpdateClick}>{data ? 'Actualizar' : <CircularProgress size={50}/>}</button> */}


            </div>
        );
    };

}


WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLoactionClick: PropTypes.func,
}


export default WeatherLocation;