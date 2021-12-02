const { Module } = require("module")

const authorize = (req, res, next) => {
    const { user } = req.query
    if( user === 'chester'){
        req.user = { name: 'jungseok roh', id: 3}
        next()
    } else {
        res.status(404).send('user not found')
    }

}

module.exports = authorize
