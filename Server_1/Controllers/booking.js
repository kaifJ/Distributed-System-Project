const bookingRoutes = require('express').Router()
const Booking = require('../Models/booking')
const { setKey, getValue, deleteKey } = require('../Connections/redisCache')

bookingRoutes.get('/', async (request, response) => {
    let bookings = await Booking.find({})
    console.log(JSON.stringify(bookings))
    response.send(`<h1>Hello from Master server. I will redirect your call to other workers</h1>`)
})

module.exports = bookingRoutes