

import React, {Component} from 'react';

import PropTypes from 'prop-types';

import ForecastItem from './../components/ForecastItem/ForecastItem';

import './../base-styles/main.scss';


const allDays = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
]


class ForecastExtended extends Component{

    renderForecastItemDays(allDays){
        return allDays.map( obj => ( <ForecastItem key={obj} weekDay={obj} hour={10} /> ))
    }

    render(){

        const {passCity} = this.props;

        return(
            <div className={`forecast-title`}>
                <h4>
                    Pronostico extendido
                    <strong>{passCity}</strong>
                </h4>

                {this.renderForecastItemDays(allDays)}
                
            </div>
        );
    }

}


ForecastExtended.propTypes = {
    passCity: PropTypes.string.isRequired,
}

export default ForecastExtended;

