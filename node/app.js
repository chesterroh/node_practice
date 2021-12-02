const express = require('express');
const app = express();
const people = require('./routes/people')
const auth = require('./routes/auth')

// static files
app.use(express.static('./public'))
// parse the body for POST requests
app.use(express.urlencoded({ extended: false }))
// for JSON usage
app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)

app.listen(3000, (req, res) => {
    console.log("server is listening on port 3000")
})