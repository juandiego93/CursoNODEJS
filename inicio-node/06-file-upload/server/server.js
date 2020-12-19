require('./config/config')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const fileUpload = require('express-fileupload')
const app = express()
app.use(fileUpload());
app.use(fileUpload({ useTempFiles: true }))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.resolve(__dirname, '../public')))

app.use(require('./routes/index'))

app.get('/', (request, response) => {
    response.json('Hola mundo')
})

app.listen((process.env.PORT), function () {
    console.log('Server running:', process.env.PORT);
})

mongoose.set('useCreateIndex', true)
mongoose.connect(
    process.env.URLDB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    err => {
        if (!err) {
            console.log('DB conneccted', process.env.URLDB);
        } else {
            console.log('Error connecting', err);
        }
    })