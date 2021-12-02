const express = require('express')
const router = express.Router()
const { getPeople, postPeople } = require('../controllers/people')

let { people } = require('../data')

//router.get('/', getPeople )
//router.post('/', postPeople)

router.route('/')
    .get(getPeople)
    .post(postPeople)

module.exports = router
