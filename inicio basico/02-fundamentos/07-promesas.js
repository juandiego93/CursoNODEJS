let empleados = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'JuanD' },
    { id: 3, nombre: 'JuanDi' },
]

let salarios = [
    { id: 1, salario: 1000 },
    { id: 2, salario: 2000 },
]

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`No existe empleado con el id ${id}`)
        } else {
            resolve(empleadoDB)
        }
    })
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);
        if (!salarioDB) {
            reject(`No existe salario asignado al empleado con id ${id}`);
        } else {
            resolve(null,
                {
                    nombre: empleado.nombre,
                    salario: salarioDB.salario,
                    id: empleado.id
                })
        }
    })
}

getEmpleado(1).then(empleado => {
    getSalario(empleado).then(salario => {
        console.log(`El salario para ${empleado.nombre} es: ${salario.salario}`);
    }, err => console.log(err))
}, err => console.log(err));

getEmpleado(2).then(empleado => {
    return getSalario(empleado);
})
    .then(resp => {
        console.log(`El salario para ${empleado.nombre} es: ${salario.salario}`);
    })
    .catch(err => {
        console.log(err);
    });