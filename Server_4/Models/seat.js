const mongoose = require('mongoose')

const seatSchema = new mongoose.Schema({
    screen: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Screen'
    },
    seat: String,
    status: String,
})

seatSchema.set('toJSON', {
    transform: (document, requiredObject) => {
        requiredObject.id = requiredObject._id
        delete requiredObject._id
        delete requiredObject.__v
    }
})

module.exports = mongoose.model('Seat', seatSchema)