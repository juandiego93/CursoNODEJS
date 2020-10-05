let getNombre = async () => {
    return 'Juan Diego Osorio Castrillón'
}


let getNombre2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Juan')
        }, 3000);
    })
}


let saludo = async () => {
    let nombre = await getNombre2();
    return `Hola ${nombre}`
}

saludo().then(msj => {
    console.log(msj);
})

getNombre()
    .then(Resp => {
        console.log(Resp);
    })
    .catch(err => {
        console.log(err);
    });
console.log(getNombre());