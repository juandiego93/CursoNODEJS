let nombre = 'DEadpoll'
let real = 'Wade'

console.log(nombre + ' ' + real);
console.log(`${nombre}`);
console.log(`${1 + 2}`);

function getNombre() {
    return `${nombre} ${real}`
}

console.log(`el nombre de ${getNombre()}`);