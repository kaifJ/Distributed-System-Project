const bookingRoutes = require('express').Router()
const Seat = require('../Models/seat')
const Screen = require('../Models/screens')
const { setKey, getValue, deleteKey } = require('../Connections/redisCache')

const helper = require('../utils/dummydata')

// Api to get all screens information
bookingRoutes.get('/', async (request, response) => {
    let screens = await Screen.find({})
    response.status(200).json(screens)
})

// Api to get details of particular screen
bookingRoutes.get('/:id', async (request, response) => {
    let screen = await Screen.findById(request.params.id).populate('seats', { seat: 1, status: 1 })
    response.status(200).json(screen)
})

// Api to book seats. Seats can be multiple
bookingRoutes.post('/', async (request, response) => {
    let seatIds = request.body.selectedSeats
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
    }, 5000)
})


//Inserting dummy screens into the database
bookingRoutes.post('/insertDummyScreens', async (request, response) => {
    let dummyScreens = helper.screenDummyData
    dummyScreens = dummyScreens.map(screen => new Screen(screen))
    let promises = dummyScreens.map(screen => screen.save())
    await Promise.all(promises)
    response.status(201).send({
        message: 'Screens created successfully'
    })
})

//Inserting dummy seats into the database
bookingRoutes.post('/insertDummySeats', async (request, response) => {
    let screens = await Screen.find({})

    let seats = screens.map(screen => {
        return helper.generateSeats(screen._id)
    })

    let seatPromises = [], screenPromises = []

    for (let index in seats) {
        let seatsIds = []
        seats[index].forEach(_seat => {
            let newSeat = new Seat(_seat)
            seatsIds.push(newSeat._id.toString())
            seatPromises.push(newSeat.save())
        })
        screens[index].seats = seatsIds
        screenPromises.push(screens[index].save())
    }

    await Promise.all(seatPromises)
    await Promise.all(screenPromises)

    response.status(201).send({
        message: 'Seats Created'
    })
})

//Deleting all Rows from all collections
bookingRoutes.delete('/deleteAll', async (request, response) => {
    await Screen.deleteMany({})
    await Seat.deleteMany({})
    response.status(200).send({
        message: 'Deleted all rows in all tables'
    })
})

module.exports = bookingRoutes