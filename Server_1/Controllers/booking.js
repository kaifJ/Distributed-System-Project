const bookingRoutes = require('express').Router()
const Seat = require('../Models/seat')
const Screen = require('../Models/screens')
const { setKey, getValue, deleteKey, getAllKeys } = require('../Connections/redisCache')
const constants = require('../utils/constants')

const helper = require('../utils/dummydata')

// Api to get all screens information
bookingRoutes.get('/', async (request, response) => {
    let screens = await Screen.find({})

    response.status(200).json(screens)
})

// Api to get details of particular screen
bookingRoutes.get('/:id', async (request, response) => {
    try {
        let keys = await getAllKeys()
        let screen = await Screen.findById(request.params.id).populate('seats', { seat: 1, status: 1 })

        screen.seats = screen.seats.map(seat => {
            if (keys.indexOf(seat._id.toString()) !== -1) {
                seat.status = "Locked"
                return seat
            }
            return seat
        })

        response.status(200).json(screen)
    } catch (error) {
        return response.status(400).send({
            message: 'Malformatted ID'
        })
    }
})

// Api to book seats. Seats can be multiple
bookingRoutes.post('/', async (request, response) => {
    try {
        let seatIds = request.body.selectedSeats

        // If another server is booking any of the seats, then respond with 400
        let keys = await getAllKeys()
        console.log(keys)
        for (let seat of seatIds) {
            if (keys.indexOf(seat) !== -1) {
                return response.status(400).send({
                    message: 'Oops! Selected seat(s) not available. Please selece other seat(s)'
                })
            }
        }

        // first update redis cache with the seat status
        let redisPromises = seatIds.map(seat => setKey(seat, "Locked"))
        await Promise.all(redisPromises)

        // simulating a delay for paying etc
        setTimeout(async () => {
            try {
                let seatsToBook = await Seat.find({
                    '_id': {
                        $in: seatIds
                    }
                })

                let promises = []
                seatsToBook.forEach(seat => {
                    seat.status = 'Booked'
                    promises.push(seat.save())
                })

                await Promise.all(promises)

                redisPromises = seatIds.map(seat => deleteKey(seat))
                await Promise.all(redisPromises)

                response.status(201).send({
                    message: 'Booking Successful'
                })
            } catch (error) {
                console.log('error')
                response.status(500).send({
                    message: 'Internal Server Error'
                })
            }
        }, constants.BOOKING_DELAY)
    } catch (error) {
        return response.status(400).send({
            message: 'Something Went wrong please try again later.'
        })
    }
})

module.exports = bookingRoutes