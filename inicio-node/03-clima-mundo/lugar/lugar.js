const axios = require('axios')

const getLugarLatLong = async (direccion) => {
    const encodedURL = encodeURI(direccion)
    const TOKEN = 'pk.eyJ1IjoianVhbmR5LTE0IiwiYSI6ImNrZzc0OWxvMjAzczUyeXFtMHJ4N3RzdGIifQ.IUPcm4_TdgUQKi3Jdx0_8g'
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedURL}.json`

    const instance = axios.create({
        params: { 'access_token': TOKEN }
    })

    const response = await instance.get(url)
    if (response.data.features.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`)
    }
    const data = response.data.features[0]
    const dir = data.place_name
    const lat = data.geometry.coordinates[0]
    const lon = data.geometry.coordinates[1]

    // instance
    //     .get(url)
    //     .then(resp => {
    //         console.log(resp.data.features);
    //     })
    //     .catch(err => {
    //         console.log('ERROR !!! ', err);
    //     })

    return {
        dir,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLong
}