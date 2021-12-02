const express = require('express');
const app = express();
const logger = require('./logger')
const authorize = require('./authorize')
// req => middle ware => res
app.use([logger, authorize])

// You can simply put the middle ware before calling the actuall logic code  ""LOGGER"""
app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.listen(3000, (req, res) => {
    console.log("server is listening on port 3000")
})