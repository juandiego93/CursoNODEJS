let empleados = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'JuanD' },
    { id: 3, nombre: 'JuanDi' },
]


let salarios = [
    { id: 1, salario: 1000 },
    { id: 2, salario: 2000 },
]

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        callback(`No existe empleado con el id ${id}`)
    } else {
        callback(null, empleadoDB)
    }

}


let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        callback(`No existe salario asignado al empleado con id ${id}`);
    } else {
        callback(null,
            {
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            })
    }
}

getEmpleado(1, (err, empleado) => {
    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, response) => {
        if (err) {
            return console.log(err);
        }
        console.log(response);
        console.log(`el salario de ${empleado.nombre} es de ${response.salario}`);
    });
});