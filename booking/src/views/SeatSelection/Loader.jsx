import React from 'react'
import { DoubleSquareLoader } from 'react-loaders-kit'
import { Loader } from './SeatSelection.style'

const DoubleLoader = ({loading}) => {
    const loaderProps = {
        loading,
        size: 75,
        duration: 3,
    }

    return (
        <Loader>
            <DoubleSquareLoader {...loaderProps} />
            <span className='message'>Simulating Payment and stuff. Sit tight we will redirect you.</span>
        </Loader>
    )
}

export default DoubleLoader