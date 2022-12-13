const Redis = require('ioredis')
const constants = require('../utils/constants')
let client

//set setat id as key while booking and status as locked
const setKey = async (key, value) => {
    await client.set(key, value, 'PX', constants.BOOKING_DELAY)
}

// get status of particular seat
const getValue = async (key) => {
    let value = await client.get(key)
    return value
}

//get all seat id(s) that are locked (in process of booking)
const getAllKeys = async () => {
    let value = await client.keys("*")
    return value
}

//delete seat id once booking is done
const deleteKey = async key => {
    return await client.del(key)
}

const connectRedisCache = async () => {
    //connect to redis
    client = new Redis({
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        password: process.env.REDIS_PASSWORD
    });

    client.on("connect", () => {
        console.log("Connected to redis cache")
    })

    client.on("error", (err) => {
        console.log(`Error in connecting to redis cache ${err}`)
    })
}

module.exports = {
    connectToCache: connectRedisCache,
    setKey,
    getValue,
    deleteKey,
    getAllKeys
}