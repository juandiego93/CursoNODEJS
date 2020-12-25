const express = require('express')
const app = express()

app.use(require('./usuario.js'))
app.use(require('./login.js'))
app.use(require('./uploads.js'))

module.exports = app
