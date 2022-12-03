const mongoose = require('mongoose')

const screenSchema = mongoose.Schema({
    screen_id: String,
    seats: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seat'
    }],
    movie: String,
    imageURL: String
})

screenSchema.set('toJSON', {
    transform: (document, requiredObject) => {
        requiredObject.id = requiredObject._id
        delete requiredObject._id
        delete requiredObject.__v
    }
})

module.exports = mongoose.model('Screen', screenSchema)
