// Dado un array como entrada devuelva el último elemento.
// COMPROBAMOS QUE EL ARRAY TENGA ELEMENTOS


const compruebaArray = (array) => {
    if (array === null || array === undefined)
        throw('Error!!! El array es nulo o undefined')
    if (array.length === 0)
        throw('Error!!! El array está vacío')
}



// PRIMERA FORMA DE HACERLO: con el operador spread
const last1 = (arr) => {
    const ultimo = [...arr].pop();
    // Comprobamos que no se modifique el array
    console.log("El array es:", arr);
    return ultimo;
}



// SEGUNDA FORMA DE HACERLO: con los métodos que ofrece Array.prototype
const last2 = (arr) => {
    compruebaArray(arr);
    Array.prototype.last = function () {
        return this[arr.length-1];
    };
    return arr.last();
};


// TERCERA FORMA DE "MEDIO" HACERLO: con el método SLICE. Pero devuelve un array con el último elemento. No el último elemento.
const last3 = (arr) => {
    compruebaArray(arr);
    return arr.slice(-1);
}


//***********************************************************************************************************************
miArray= ['sonia', 1, 2];
// miArray = null;


try {
    compruebaArray(miArray);
    console.log("---1ra forma----", last1(miArray));
    console.log("---2da forma----", last2(miArray));
    console.log("---¿Se modificó el array?----", miArray);
    console.log("---3ra forma----", last3(miArray));
    console.log("---¿Se modificó el array?----", miArray);
}catch (error) {
    console.error(error);
}




