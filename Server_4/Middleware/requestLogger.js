const requestLogger = (request, response, next) => {
    if (request.path != "/")
        console.log(`Server -4 Method: ${request.method}, Path: ${request.path}`)
    next()
}

module.exports = {
    requestLogger
}