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

module.exports = bookingRoutes