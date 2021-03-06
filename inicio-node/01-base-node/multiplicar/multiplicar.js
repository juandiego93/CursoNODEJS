const fs = require('fs')
const colors = require('colors')
let data = ``
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`el valor de la base ${base} no es un número`)
            return
        }
        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
            console.log(`${base} * ${i} = ${base * i}\n`);
        }
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err)
            }
            resolve(` tablas/tabla-${base}.txt`);
        })
    })
}

let listarTabla = (base, limite = 10) => {

    console.log('========================='.green);
    console.log(`Tabla del ${base}`.green);
    console.log('========================='.green);
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}
