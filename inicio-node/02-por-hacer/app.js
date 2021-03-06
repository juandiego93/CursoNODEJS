const argv = require('./config/yargs').argv
const colors = require('colors')
const { actualizar } = require('./por-hacer/por-hacer')
const porHacer = require('./por-hacer/por-hacer')
let comando = argv._[0]
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log('Crear por hacer', tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado()
        for (let tarea of listado) {
            console.log('============= POR HACER ==============='.green)
            console.log('Tarea: ', tarea.desc)
            console.log('Estado: ', tarea.completado)
            console.log('======================================='.green)
        }
        console.log('Mostrar todas las tareas por hacer')
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion)
        console.log(actualizado)
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion)
        console.log(borrado);
        break;
    default:
        console.log('Comando no es reconocido')
        break;
}