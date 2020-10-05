//Tipos de importaciones
//const fs = require('fs')// Propia libreria de node
// const express = require('express') //No es propia de node - Install
// const MyArchivo = require('./[path]') //Archivos propios del proyecto
// let base = 'a'
// let base = 4
// let argv2 = process.argv
// console.log(argv);
// console.log(argv2);
// let param = argv[2]
// let base = param.split('=')[1]

const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base)
            .then((result) => console.log(`Archivo creado en ${result}`))
            .catch((err) => console.log(err));
        break;
}


