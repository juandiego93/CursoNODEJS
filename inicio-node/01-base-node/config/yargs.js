const opt = {
    base: {
        demand: true,
        alias: 'b',
        description: 'Numero a multiplicar'
    },
    limite: {
        alias: 'l',
        default: 10,
        description: 'Limite de la tabla'
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'Crea un archivo con la tabla de multiplicar', opt)
    .help()
    .argv

module.exports = {
    argv
}