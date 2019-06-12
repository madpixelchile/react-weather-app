

import React, {Component} from 'react';

import PropTypes from 'prop-types';

import './../base-styles/main.scss';


class ForecastExtended extends Component{

    render(){

        const {passCity} = this.props;

        return(
            <div className={`forecast-title`}>
                <h4>
                    Pronostico extendido
                    <strong>{passCity}</strong>
                </h4>
            </div>
        );
    }

}


ForecastExtended.propTypes = {
    passCity: PropTypes.string.isRequired,
}

export default ForecastExtended;

