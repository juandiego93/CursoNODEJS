setTimeout(() => { console.log('Hola mundo'); }, 300)

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'juan',
        id,
    }

    if (id == 20) {
        console.log('Usuario con id ' + id + ' no existe en la bd');
    } else {
        callback(null, usuario)
    }
}

getUsuarioById(10, (err, usuario) => {
    if (err) { return console.log(err); }
    console.log('usuario bd', usuario);
})