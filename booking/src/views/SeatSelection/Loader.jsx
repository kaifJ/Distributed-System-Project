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
            <span className='message'>Simulating Payment. Relax, have a cold one, you will be redirected once the booking is confirmed.</span>
        </Loader>
    )
}

export default DoubleLoader