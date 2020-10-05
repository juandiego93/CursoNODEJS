let deadpoll = {
    nombre: 'Juan',
    apellido: 'OC',
    poder: 'Endeudarse',
    getNombre: function () {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

console.log(deadpoll);


let { nombre: primerNombre, apellido, poder } = deadpoll

console.log(primerNombre, apellido, poder);