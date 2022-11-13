const redis = require('redis')
let client

const setKey = async (key, value) => {
    await client.set(key, value)
}

const getValue = async (key) => {
    let value = await client.get(key)
    return value
}

const deleteKey = async key => {
    return await client.del(key)
}

const connectRedisCache = async () => {
    client = redis.createClient({
        url: process.env.REDIS_URL
    });

    client.connect()

    client.on("connect", () => {
        console.log('Connected to redis cache')
    })

    client.on('error', err => {
        console.log('Error ' + err);
    });
}

module.exports = {
    connectToCache: connectRedisCache,
    setKey,
    getValue,
    deleteKey
}