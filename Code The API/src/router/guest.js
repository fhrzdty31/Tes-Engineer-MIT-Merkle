const app = require('express')()
const guest = require('../controllers/guest')

app.get('/', guest.findAll)
app.get('/:id', guest.findOne)
app.post('/', guest.insert)

module.exports = app