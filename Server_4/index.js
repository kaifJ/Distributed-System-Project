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

const PORT = process.env.PORT || 3001

const app = express()
const server = http.createServer(app)

app.use(express.json())
app.use(cors())
app.use(requestLogger)

app.use('/api/bookings', bookingRoutes)
app.use('/', (request, response) => {
    response.status(200).send('<h1>Hello from server 4</h1>')
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})