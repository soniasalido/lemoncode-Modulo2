// Dado un array como entrada devuelta todos menos el primer elemento.


// COMPROBAMOS QUE EL ARRAY TENGA ELEMENTOS
const compruebaArray = (array) => {
    if (array === null || array === undefined)
        throw('Error!!! El array es nulo o undefined')
    if (array.length === 0)
        throw('Error!!! El array está vacío')
}



const tail = (arr) => {
    const [primero, ...lodemas] = arr;
    // Comprobamos que no se modifique el array
    console.log("El array es:", arr);
    return lodemas;
};



// miArray= ['sonia', 1, 2];
miArray= [{name: 'sonia', edad: 40}, 1, 2];
// miArray = null;

try{
    compruebaArray(miArray);
    console.log("---Resultado----", tail(miArray));

    console.log("---¿Se modificó el array?----");
    console.log(miArray);
}catch (error){
    console.error(error);
}



