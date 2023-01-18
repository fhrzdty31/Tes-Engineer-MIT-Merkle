const app = require('express')()
const admin = require('../controllers/admin')
const authorization = require('../middleware/auth')

app.post('/', admin.admin)
app.get('/', [authorization.authorization], admin.findAll)
app.get('/:id', [authorization.authorization], admin.findOne)
app.delete('/:id', [authorization.authorization], admin.delete)

module.exports = app