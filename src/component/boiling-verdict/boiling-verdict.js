import React from 'react';

const BoilingVerdict = (props) => {
    if (props.celsius >= 100) {
        return(
            <div>горячо</div>
        )
    }
    return(
        <div>холодно</div>
    )
}
export default BoilingVerdict