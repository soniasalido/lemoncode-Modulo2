// Dados 2 arrays como entrada, devuelva la concatenación de ambos.


// COMPROBAMOS QUE EL ARRAY NO SEA NULL O UNDEFINED
// Si un array no tiene elementos, también se puede concatenar con otro array.
const compruebaArray = (array) => {
    if (array === null || array === undefined)
        throw('Error!!! Un array es nulo o undefined')
    // if (array.length === 0)
    //     throw('Error!!! El array está vacío')
}



const concat = (a, b) => {
    return [...a, ...b];
};

miArray= ['sonia', 48, 'granada'];
// miArray = null;
// miArray2= ['rosa', 40, 'málaga'];
// miArray2= [];
miArray2= null;


try{
    compruebaArray(miArray);
    compruebaArray(miArray2);
    console.log("Resultado: ", concat(miArray, miArray2));
    console.log("---¿Se modificó el array?----", miArray);
    console.log("---¿Se modificó el array?----", miArray2);
}catch (error) {
    console.error(error);
}




