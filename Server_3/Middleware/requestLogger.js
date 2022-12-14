const requestLogger = (request, response, next) => {
    if (request.path != "/")
        console.log(`Server -3 Method: ${request.method}, Path: ${request.path}`)
    next()
}

module.exports = {
    requestLogger
}