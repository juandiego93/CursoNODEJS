const axios = require('axios')
const API_KEY = 'fa5ae80bc70a122428d132ad0f349949'
const getClima = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    const response = await axios.get(url)

    return response.data.main.temp

}

module.exports = {
    getClima
}