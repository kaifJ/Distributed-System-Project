const Redis = require('ioredis')
const constants = require('../utils/constants')
let client

const setKey = async (key, value) => {
    await client.set(key, value, 'EX', constants.BOOKING_DELAY)
}

const getValue = async (key) => {
    let value = await client.get(key)
    return value
}

const getAllKeys = async () => {
    let value = await client.keys("*")
    return value
}

const deleteKey = async key => {
    return await client.del(key)
}

const connectRedisCache = async () => {
    client = new Redis({
        host: 'redis-10047.c135.eu-central-1-1.ec2.cloud.redislabs.com',
        port: 10047,
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