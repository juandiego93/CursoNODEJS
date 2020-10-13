const http = require('http')


http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    const salida = {
        nombre: "Juan Diego",
        edad: 26
    }
    response.write(JSON.stringify(salida))
    response.end()
})
    .listen(8080)

console.log('Server Running:8080');