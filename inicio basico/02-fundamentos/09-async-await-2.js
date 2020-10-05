let empleados = [
    { id: 1, nombre: 'Juan' },
    { id: 2, nombre: 'JuanD' },
    { id: 3, nombre: 'JuanDi' },
]

let salarios = [
    { id: 1, salario: 1000 },
    { id: 2, salario: 2000 },
]

let getEmpleado = async (id) => {
    // return new Promise((resolve, reject) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        throw new Error(`No existe empleado con el id ${id}`)
    } else {
        return empleadoDB
    }
    // })
}

let getSalario = (empleado) => {
    // return new Promise((resolve, reject) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
    if (!salarioDB) {
        throw new Error(`No existe salario asignado al empleado con id ${id}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        }
    }
    // })
}


let getInformacion = async (id) => {
    let empleado = await getEmpleado(id)
    let resp = await getSalario(empleado)
    return `${empleado.nombre} tiene un salario de ${resp.salario}`
}


getInformacion(1)
    .then(msj => console.log(msj))
    .catch(err => console.log(err))