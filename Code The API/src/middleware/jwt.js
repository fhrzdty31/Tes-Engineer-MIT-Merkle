const jwt = require('jsonwebtoken')

const SCREAT_KEY = 'Merkle'

const createToken = (data) => {
    let pyload = JSON.stringify(data)
    return jwt.sign(pyload, SCREAT_KEY)
}

module.exports = createToken