const requestLogger = (request, response, next) => {
    if (request.path == "/")
        next()
    console.log(`Server -2 Method: ${request.method}, Path: ${request.path}`)
    next()
}

module.exports = {
    requestLogger
}