//  Dado un array como entrada devuelva todos los elementos menos el último.
//  Utiliza los métodos que ofrece Array.prototype

// COMPROBAMOS QUE EL ARRAY TENGA ELEMENTOS
const compruebaArray = (array) => {
    if (array === null || array === undefined)
        throw('Error!!! El array es nulo o undefined')
    if (array.length === 0)
        throw('Error!!! El array está vacío')
}


// Usamos el método Array.prototype.slice() para extraer los elementos del array:
// miArray.slice(inicio, fin)
const init = (arr) => {
    const resultado=  arr.slice(0, arr.length - 1)
    // Comprobamos que no se modifique el array
    console.log("---¿Se modificó el array?----", arr);
    return resultado;
};


miArray= ['sonia', 1, 2];
// miArray = undefined;

try {
    compruebaArray(miArray);
    console.log("---Resultado----", init(miArray));
    console.log("---¿Se modificó el array?----", miArray);
}catch (error) {
    console.error(error);
}




