const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv

// lugar.getLugarLatLong(argv.direccion)
//     .then(console.log)
//     .catch(console.log)

// clima.getClima(-74.08083, 4.59889)
//     .then(console.log)
//     .catch(console.log)

const getInfo = async (direccion) => {
    try {
        const coord = await lugar.getLugarLatLong(direccion)
        const temp = await clima.getClima(coord.lat, coord.lon)
        return `El clima de ${direccion} es de ${temp}`
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion} - Error ${error}`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)