const jwt = require('jsonwebtoken')
const { unsubscribe } = require('../routes/usuario')

// Verificar Token
let verifyToken = (request, response, next) => {
    let token = request.get('token'), verifyTokenStatus
    try {
        verifyTokenStatus = jwt.verify(token, process.env.SEED)
        if (verifyTokenStatus) {
            request.usuario = verifyTokenStatus.usuario
            next()
        }
    } catch (err) {
        return response.status(500).json({
            ok: false,
            err
        })
    }
}

//Verify Role

let verifyRoleAdmin = (request, response, next) => {
    let usuario = request.usuario
    if (usuario.role === 'ADMIN') {
        next()
    } else {
        response.json({
            ok: false,
            err: {
                message: 'No es un usuario administrador'
            }
        })
    }
}


let verifyTokenbyURLImg = (request, response, next) => {
    let paramToken = request.query.token
    // response.json(paramToken)
    try {
        verifyTokenStatus = jwt.verify(paramToken, process.env.SEED)
        if (verifyTokenStatus) {
            request.usuario = verifyTokenStatus.usuario
            next()
        }
    } catch (err) {
        return response.status(500).json({
            ok: false,
            err
        })
    }
}

module.exports = {
    verifyToken,
    verifyRoleAdmin,
    verifyTokenbyURLImg
}