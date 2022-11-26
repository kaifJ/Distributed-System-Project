const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    screen: String,
    seat: String,
    status: String,
})

bookingSchema.set('toJSON', {
    transform: (document, requiredObject) => {
        requiredObject.id = requiredObject._id
        delete requiredObject._id
        delete requiredObject.__v
    }
})

module.exports = mongoose.model('Booking', bookingSchema)