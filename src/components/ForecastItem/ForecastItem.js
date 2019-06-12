
import React from 'react';

import PropTypes from 'prop-types';


const ForecastItem = ({weekDay, hour})=>{ // es lo mismo que el siguiente comentado, con la diferencia es que con llaves podermos incorporar mas de una linea
    return(
        <div>{weekDay} Hora: {hour} hrs.</div>
    )
}

// const ForecastItem = ()=>( //Este permite una línea de código y no requiere return. Para mí es más completo con las llaves y return. No se si afecta en performance.
//     <div>Item</div>
// )


ForecastItem.propTypes = {
    cities: PropTypes.string.isRequired,
}

export default ForecastItem;