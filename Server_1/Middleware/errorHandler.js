const errorHandler = (error, request, response, next) => {
    console.log('here')
    if (error.name === 'CastError') {
        return response.status(400).send({
            error: 'malformatted id'
        })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({
            error: error.message
        })
    }
    next(error)
}

module.exports = {
    errorHandler
}