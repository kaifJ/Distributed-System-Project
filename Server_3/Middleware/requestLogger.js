const requestLogger = (request, response, next) => {
    console.log(`Server -3 Method: ${request.method}, Path: ${request.path}`)
    next()
}

module.exports = {
    requestLogger
}