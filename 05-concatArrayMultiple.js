//  Dados X arrays como entrada, devuelva la concatenación de todos.
// He puesto varias formas de hacerlo, pero la única que resuelve el ejercicio es la solución 4.
// Mantengo las otras soluciones, ya que son muy interesantes para mí.


// COMPROBAMOS QUE EL ARRAY NO SEA NULL O UNDEFINED
// Si un array no tiene elementos, también se puede concatenar con otro array.
const compruebaArray = (array) => {
    if (array === null || array === undefined)
        throw('Error!!! Un array es nulo o undefined')
    // if (array.length === 0)
    //     throw('Error!!! El array está vacío')
}



// SOLUCIÓN 1 --> Se devuelve un ARRAY DE ARRAYS. No es la solución correcta.
// Usamos el operador REST para recoger todos los argumentos que se pasen a la función arrayDeArrays
// Metemos en un array, todos los arrays que nos pasen en los parámetros de la función
const arrayDeArrays = (...miArray) => {
    try{
        compruebaArray(miArray);
        return miArray;
    }catch (error) {
        console.error(error);
    }
};



// SOLUCIÓN 2 --> Se devuelve un OBJETO DE ARRAYS. No es la solución correcta.
// Genera un objeto que contiene los diferentes arrays que se le envían como argumento
const objetoDeArrays = (...miArray) => {
    try{
        compruebaArray(miArray);
        const resultado = {...miArray};
        return [resultado];
    }catch (error) {
        console.error(error);
    }
};


// SOLUCIÓN 3 --> Se devuelve una lista que contiene una lista con la concatenación. Tampoco es la solución correcta.
const listaDeLista = (...miArray) => {
    try{
        compruebaArray(miArray);
        let resultado = [];

        //Concatenamos el array resultado con cada item de miArray
        miArray.forEach((item) => {
            resultado = resultado.concat(item);
        })

        return [resultado];
    }catch (error) {
        console.error(error);
    }
};


// SOLUCIÓN 4 --> Usamos el método .reduce() para concatenar los arrays y obtener la solución correcta al ejercicio.
// .reduce(valorAcumulado, valorActual, índice, arrayOriginal)
const concatenacionListas = (...arrays) =>
    arrays.reduce((valorAcumulado, valorActual) =>
        valorAcumulado.concat(valorActual)
    );


miArray= ['sonia', 48, 'granada'];
// miArray = null;
miArray2= ['rosa', 40, 'málaga'];
// miArray2= [];
// miArray2= null;
miArray3= ['paco', 20, 'madrid'];


console.log("Array de Arrays: ", arrayDeArrays(miArray, miArray2, miArray3, miArray2, miArray));
console.log("Objeto de Arrays: ", objetoDeArrays(miArray, miArray2, miArray3, miArray2, miArray));
console.log("Lista que contiene una lista con la concatenación.: ", listaDeLista(miArray, miArray2, miArray3, miArray2, miArray));
console.log("Concatenación de Arrays: ", concatenacionListas(miArray, miArray2, miArray3, miArray2, miArray));

