function sumar(a, b) { return a + b }
let sumar2 = (a, b) => a + b;

console.log(sumar(13, 45));
console.log(sumar2(3, 9));


function saludar() {
    return 'hola mundo 1'
}

let saludar2 = () => 'Hola mundo 2'


console.log(saludar());
console.log(saludar2());

let deadpoll = {
    nombre: 'Juan',
    apellido: 'OC',
    poder: 'Endeudarse',
    getNombre: function () {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    },
    // getNombre: () => {
    //     return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    // } //Esta funcion en el obj This -> apunta al obj exterior no al contenedor deadpoll.
}

console.log(deadpoll);