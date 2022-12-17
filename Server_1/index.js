require('dotenv').config()

const cors = require('cors')
const http = require('http')
const express = require('express')
const bookingRoutes = require('./Controllers/booking')
const { requestLogger } = require('./Middleware/requestLogger')

const { connectToCache } = require('./Connections/redisCache')
const connectToDB = require('./Connections/mongodb')

connectToDB()
connectToCache()

const PORT = 8080

const app = express()
const server = http.createServer(app)

app.use(express.json())
app.use(cors())
app.use(express.static('build'))
app.use(requestLogger)

app.use('/api/bookings', bookingRoutes)
app.use('/', (request, response) => {
    response.status(200).send()
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})