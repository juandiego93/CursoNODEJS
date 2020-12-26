const express = require('express')
const fs = require('fs')
const path = require('path')
const { verifyTokenbyURLImg } = require('../middlewares/auth')
let app = express()


app.get('/imagen/:tipo/:img', verifyTokenbyURLImg, (request, response) => {
    let tipo = request.params.tipo
    let img = request.params.img
    let pathURLImage = path.resolve(__dirname, `../../uploads/${tipo}/${img}`)

    if (fs.existsSync(pathURLImage)) {
        response.sendFile(pathURLImage)
    } else {
        let noImagePath = path.resolve(__dirname, '../assets/no-image.jpg')
        response.sendFile(noImagePath)
    }
})


module.exports = app