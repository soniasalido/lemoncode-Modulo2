// A partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source

// SHALLOW COPY: Copia superficial --> Se copia SÓLO el primer nivel, los niveles más profundos se referencian
// Usando el operador spread hacemos un clon superficial del objeto.
// Si el array está anidado o es multidimensional, no se hace un clon, se copian las referencias
function cloneSuperficial(source) {
    return {...source};
}


// Copia profunda --> Es una copia verdadera copia para todos los elementos del objeto
// cloneDeep trabaja con todos los tipos.
// cloneDeep necesita instalar el paquete --> npm i lodash.clonedeep
const cloneDeep = require('lodash.clonedeep');



const objetoOriginal = {
    nombre: "Sonia",
    apellido: "Salido",
    ciudad: 'Granada',
    matriz: [1,2,3,4,5],
    localizacion : {
        latitud: '3.65656',
        longitud: '4.5566',
    },
}

console.log("Objeto original -->", objetoOriginal);

const clon1 = cloneSuperficial(objetoOriginal);
clon1.matriz.push(10);
clon1.localizacion.latitud = '4';
// Al modificar la latitud en el clon1, se modifica también la latitud del objetoOriginal




const clon2 = cloneDeep(objetoOriginal);
clon2.matriz.pop();
clon2.localizacion.longitud = '5;'
// Al modificar la longitud en el clon2, ya NO se modifica la longitud del objetoOriginal


console.log("Objeto original -->", objetoOriginal);
console.log("Primera Copia (superficial) -->", clon1);
console.log("Segunda Copia (profunda) -->", clon2);
console.log("Objeto original -->", objetoOriginal);

