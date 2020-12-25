const express = require('express')
const fileUpload = require('express-fileupload')
const usuario = require('../models/usuario')
const app = express()
const Usuario = require('../models/usuario')
const Producto = require('../models/producto')
const fs = require('fs')
const path = require('path')

app.put('/upload/:tipo/:id', (request, response) => {

    let id = request.params.id
    let tipo = request.params.tipo

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

    //Validar tipo 
    let validTypes = ['productos', 'usuarios']
    if (validTypes.indexOf(tipo) < 0) {
        return response.status(400).json({
            message: 'Los tipos permitidos son ' + validTypes.join(', '),
            ok: false
        })
    }
    let archivo = request.files.archivo
    let nameFileCut = archivo.name.split('.')
    let extention = nameFileCut[nameFileCut.length - 1]
    //Extensiones permitidas
    let extentionsAllowed = ['png', 'jpg', 'jpeg', 'gif']
    if (extentionsAllowed.indexOf(extention) < 0) {
        return response.status(400).json({
            message: 'Las extensiones permitidas son ' + extentionsAllowed.join(', '),
            ok: false
        })
    }

    //CAmbiar nombre al archivo 
    let nameFile = `${id}-${new Date().getMilliseconds()}.${extention}`

    archivo.mv(`uploads/${tipo}/${nameFile}`, (err) => {
        if (err) {
            return response
                .status(500)
                .json({
                    ok: false,
                    err
                })
        }

        //Imagen cargada
        ImageUser(id, response, nameFile)
    })

    function ImageUser(id, response, nameFile) {
        Usuario.findById(id, (err, userDB) => {
            if (err) {
                removeFile(nameFile, 'usuarios')
                return response
                    .status(500)
                    .json({
                        ok: false,
                        err
                    })
            }

            if (!userDB) {
                removeFile(nameFile, 'usuarios')
                return response
                    .status(500)
                    .json({
                        ok: false,
                        err,
                        message: 'User doesn`t exist. GTV 043 f.0730'
                    })
            }

            removeFile(userDB.img, 'usuarios')

            userDB.img = nameFile
            userDB.save((err, userSaved) => {
                response.json({
                    ok: true,
                    message: 'Image upload Successfully',
                    user: userDB,
                    img: nameFile
                })
            })

        })
    }

    function ImageProduct() { }


    function removeFile(nameFile, type) {
        let pathURLImage = path.resolve(__dirname, `../../uploads/${type}/${nameFile}`)
        if (fs.existsSync(pathURLImage)) {
            fs.unlinkSync(pathURLImage)
        }
    }
})

module.exports = app