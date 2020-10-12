const axios = require('axios')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv

const encodedURL = encodeURI(argv.direccion) 
const TOKEN = 'pk.eyJ1IjoianVhbmR5LTE0IiwiYSI6ImNrZzc0OWxvMjAzczUyeXFtMHJ4N3RzdGIifQ.IUPcm4_TdgUQKi3Jdx0_8g'
const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedURL}.json`

const instance = axios.create({
    params: { 'access_token': TOKEN }
})

instance
    .get(url)
    .then(resp => {
        console.log(resp.data.features);
    })
    .catch(err => {
        console.log('ERROR !!! ', err);
    })