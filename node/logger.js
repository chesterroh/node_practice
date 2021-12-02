
const logger = (req, res, next) => {     /// calling next() function is fucking important !!
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
}

module.exports = logger 