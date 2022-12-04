const mongoose = require('mongoose')

const connectToDB = () => {
    const mongoURL = process.env.MONGODB_URL

    //connect to mongodb database
    mongoose.connect(mongoURL)
        .then(() => {
            console.log('connected to mongdb')
        }).catch(err => {
            console.log(`Mongodb connection failed ${err}`)
        })
}

module.exports = connectToDB