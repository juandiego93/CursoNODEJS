const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
let Schema = mongoose.Schema

let rolesValidos = {
    values: ['ADMIN', 'USER', 'QA', 'DEV'],
    message: '{VALUE} no es un rol válido'
}

let usuarioSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es requerido']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: true,
        default: 'USER',
        enum: rolesValidos
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
})

usuarioSchema.methods.toJSON = function () {
    let user = this
    let userObj = user.toObject()
    delete userObj.password
    return userObj
}


usuarioSchema.plugin(uniqueValidator, {
    message: '{PATH} debe de ser único'
})


module.exports = mongoose.model('Usuario', usuarioSchema)