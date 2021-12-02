const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    const { name } = req.body
    if (name) {
        res.send(`Welcome ${name}`)
    }
    else {
        res.send("please provide user credentials")
    }

})

module.exports = router