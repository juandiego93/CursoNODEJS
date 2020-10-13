const express = require('express')
const app = express()

const hbs = require('hbs')
require('./hbs/helpers')
app.use(express.static(__dirname + '/public'))

hbs.registerPartials(__dirname + '/views/parciales', (err) => console.log(err))

app.set('view engine', 'hbs')

app.get('/', (req, resp) => {
    resp.render('home', {
        nombre: 'Juan Diego'
    })
})

app.get('/about', (req, resp) => {
    resp.render('about')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server Running: 3000');
})
