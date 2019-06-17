

import React, {Component} from 'react';

import PropTypes from 'prop-types';

import ForecastItem from './../components/ForecastItem/ForecastItem';

import transformForecast from './../services/transfromForecast';

import './../base-styles/main.scss';


const allDays = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
]

// const data = {
//     temperature: 10,
//     humidity: 10,
//     weatherState: 'normal',
//     wind: 'normal',
// }

export const keyUrl = "7332e4793f6b1ffdf08f63d552ddc17d";
export const url = "http://api.openweathermap.org/data/2.5/forecast";

class ForecastExtended extends Component{


    constructor(props){
        super(props);

        this.state = {
            forecastData: null,
        }

    }

 
    componentDidMount(){
        this.updateCity(this.props.city);
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({
                forecastData: null,
            });
            this.updateCity(nextProps.city);
        }
    }


    updateCity = (city)=>{

        
        const urlForecast = `${url}?q=${this.props.city}&appid=${keyUrl}`;

        //Fetch or axios

        fetch(urlForecast).then((resolve)=>{
            return resolve.json();
        }).then((weather_data)=>{
            // console.log(weather_data);
            const forecastData = transformForecast(weather_data);
            // console.log(weather_data);
            this.setState({
                forecastData: forecastData,
            })

        }).catch((error)=>{
            return error;
        })


    }



    renderForecastItemDays(forecastData){
        return forecastData && forecastData.map( forecast => ( 
            <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`} 
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data}
            /> 
        ))
    }

    renderProgress = ()=>{
        return 'El forecast item se está cargando...'
    }

    render(){

        const {city} = this.props;

        const {forecastData} = this.state;

        console.log(city);

        if(forecastData){
            console.log(forecastData);
        }

        return(
            <div className={`forecast-title`}>
                <h4>
                    Pronostico extendido
                    <strong>{city}</strong>
                </h4>

                {
                    forecastData ? this.renderForecastItemDays(forecastData) : this.renderProgress()
                }
                
            </div>
        );
    }

}


ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;

