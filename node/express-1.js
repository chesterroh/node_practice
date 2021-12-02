
const express = require('express');
const process = require('process');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
})

const server = app.listen(3000, () => console.log('Server ready'))

process.on('SIGTERM', () => {
    server.close(() => {
        console.log("process terminated")
    })

})