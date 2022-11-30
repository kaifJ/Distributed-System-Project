let generateScreens = (numberOfScreens) => {
    let screens = []
    let movies = ['The Hangover -1', 'The Hangover -2', 'The Hangover -3']
    for (i = 1; i <= numberOfScreens; i++) {
        screens.push({
            screen_id: i,
            seats: [],
            movie: movies[i - 1]
        })
    }
    return screens
}

let generateSeats = (screenId) => {
    let seats = []
    for (i = 1; i <= 5; i++) {
        seats.push({
            screen: screenId,
            seat: i + '',
            status: 'available'
        })
    }
    return seats
}

const screenDummyData = [...generateScreens(3)]

module.exports = {
    screenDummyData,
    generateSeats
}