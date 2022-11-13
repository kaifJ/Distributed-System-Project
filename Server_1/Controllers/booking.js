const bookingRoutes = require('express').Router()
const { setKey, getValue, deleteKey } = require('../Connections/redisCache')

bookingRoutes.get('/', async (request, response) => {
    await setKey('test', 'Locked').catch(err => console.log(err))
    let result = await getValue('test')
    console.log(result)
    await deleteKey('test').catch(err => console.log(err))
    console.log('deleted')
    response.send(`<h1>Hello from Master server. I will redirect your call to other workers</h1>`)
})

module.exports = bookingRoutes