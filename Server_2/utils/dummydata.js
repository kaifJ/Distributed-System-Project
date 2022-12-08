let generateScreens = (numberOfScreens) => {
    let screens = []
    let movies = ['The Hangover-1', 'The Hangover-2', 'The Hangover-3']
    let movieImages = [
        'https://upload.wikimedia.org/wikipedia/en/b/b9/Hangoverposter09.jpg',
        'https://upload.wikimedia.org/wikipedia/en/9/9d/HangoverPart2MP2011.jpg',
        'https://upload.wikimedia.org/wikipedia/en/1/15/The_Hangover_Part_3.JPG'
    ]
    for (i = 1; i <= numberOfScreens; i++) {
        screens.push({
            screen_id: i,
            seats: [],
            movie: movies[i - 1],
            imageURL: movieImages[i - 1]
        })
    }
    return screens
}

let generateSeats = (screenId) => {
    let seats = []
    for (i = 1; i <= 80; i++) {
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