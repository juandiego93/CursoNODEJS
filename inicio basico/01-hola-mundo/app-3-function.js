console.log('Inicio programa');

setTimeout(function () { console.log('Primer TimeOut'); }, 3000);
setTimeout(function () { console.log('Segundo TimeOut'); }, 0);
setTimeout(function () { console.log('Tercero TimeOut'); }, 0); 

console.log('Fin programa');