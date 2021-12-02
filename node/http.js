
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end("Welcome to our homepage")
    }

    if (req.url == '/about') {
        res.end("here is our short history")
    }

    res.end("
        < h1 > ok fuck </h1 >
    <p> we can't locate your request</p>
    <a href='/'>back to home</a>
    ")
})



server.listen(5000)