import React from 'react';
import spinner from '../../assets/spinner.gif'

const Spinner = () => {
    const center = {
        textAlign:"center",
        margin: "auto"
    }
    return (
        <div style={center}>
            <img src={spinner} alt="Loading.." />
        </div>
    )
}

export default Spinner
