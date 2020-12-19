const express = require('express')
const app = express()

app.use(require('./uploads.js'))

module.exports = app
