const axios = require('axios')

const servers = [
    "http://localhost:4002",
    "http://localhost:4003"
]


let current = 0, server
const handler = async (req, res) => {
    const { method, url, headers, body: data } = req
    server = servers[current]
    current === (servers.length - 1) ? current = 0 : current++
    try {
        const response = await axios({
            url: `${server}${url}`,
            method,
            headers,
            data
        })
        console.log(`proxy to  ${server} succeded`)
        res.send(response.data)
    }
    catch (err) {
        console.log(`proxy to ${server} failed`)
        handler(req, res)
    }
}

module.exports = handler