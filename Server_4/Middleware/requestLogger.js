const requestLogger = (request, response, next) => {
    if (request.path == "/")
        next()
    console.log(`Server -4 Method: ${request.method}, Path: ${request.path}`)
    next()
}

module.exports = {
    requestLogger
}