
let { people } = require('../data')

const getPeople = (req, res) => {
    res.status(201).send(res.json({ success: true, data: people }))
}

const postPeople =  (req, res) => {
    const { name } = req.body

    if (!name) {
        return res.status(404).json({ success: false, msg: 'please provide the name' })
    }

    res.status(201).json({sucess: true, person: name})
  
}

module.exports = {
    getPeople,
    postPeople,
}