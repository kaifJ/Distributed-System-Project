require('dotenv').config()

const cors = require('cors')
const http = require('http')
const express = require('express')
const loadBalancer = require('./loadBalancer')

const PORT = process.env.PORT || 3001

const app = express()
const server = http.createServer(app)

app.use(express.json())
app.use(cors())

// app.use((request, response) => { loadBalancer(request, response) })
app.get('/', (request, response) => {
    response.send(`<h1>Hello from Master server. I will redirect your call to other workers</h1>`)
})

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})