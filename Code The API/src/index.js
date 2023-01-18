const express = require('express')
const cors = require('cors')
// const morgan = require('morgan') // for development

const router = require('./router/index')

const app = express()
const port = 8080

app.use(cors())
// app.use(morgan('dev')) // for development
app.use(express.json())

router.forEach(router => app.use(router.path, router.route))

app.use((_req, res) => res.status(404).json({message: 'Page Not Found'}))

app.listen(port, () => console.log(`App listen in http://localhost:8080`))