// Dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de
// target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.


const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
// Resultado esperado: {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}



// Ponemos el objeto a el último para que prevalezca las propiedades de a sobre las del objeto b
const merge = (a, b) => ({ ...b, ...a });
console.log(merge(a,b));

