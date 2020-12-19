const express = require('express')
const fileUpload = require('express-fileupload')
const app = express()

app.use(fileUpload())

app.put('/upload', (request, response) => {

    if (!request.files) {
        return response
            .status(400)
            .json({
                ok: false,
                err: {
                    message: 'No se ha seleccionado ningún archivo.'
                }
            })
    } 

    let archivo = request.files.archivo

    archivo.mv('/filename.jpg', (err) => {
        if (err) {
            return response
                .status(500)
                .json({
                    ok: false,
                    err
                })
        }

        response.json({
            ok: true,
            message: 'Image upload Successfully'
        })
    })

})

module.exports = app