const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'MArca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', descripcion)
    .command('actualizar', 'Actualizar una tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea por hacer', descripcion)
    .help()
    .argv

module.exports = {
    argv
}


