import React from 'react';


const ErrorView = ({ message }) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <img src="/error.svg" alt="Error View" />
            <span style={{marginTop:40}}>{message}</span>
        </div>
    )
}

export default ErrorView