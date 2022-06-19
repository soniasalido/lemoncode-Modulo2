// Dado un array como entrada se extrae y devuelve su primer elemento.
// He puesto varias formas de hacerlo, pero la única que resuelve el ejercicio son las dos primeras.
// Mantengo las otras soluciones, ya que son muy interesantes para mí.

// COMPROBAMOS QUE EL ARRAY TENGA ELEMENTOS
const compruebaArray = (array) => {
    if (array === null || array === undefined)
        throw('Error!!! El array es nulo o undefined')
    if (array.length === 0)
        throw('Error!!! El array está vacío')
}


// PRIMERA FORMA DE HACERLO --> con el operador ... Separo el array en dos partes
const head1 = (arr) => {
    const [primero, ...lodemas] = arr;
    // Comprobamos que no se modifique el array
    console.log("El array es:", arr);
    return primero;
};



// SEGUNDA FORMA DE HACERLO: con el operador spread
const head2 = (arr) => {
    const primero = [...arr].shift();
    // Comprobamos que no se modifique el array
    console.log("El array es:", arr);
    return primero;
}



// TERCERA FORMA DE HACERLO
// Pero esto NO es una solución para el ejercicio porque no usa destructuring del array
const head3 = (arr) => {
    Array.prototype.first = function () {
        return this[0];
    };
    return arr.first();
};



// CUARTA FORMA DE HACERLO
// Pero esto NO retorna el primer elemento, ya que es una función.
const head4 = (arr) => {
    const getFrist = ([first]) =>first;
    console.log(getFrist(arr));
};


miArray= ['sonia', 1, 2];
// miArray = null;


try{
    compruebaArray(miArray);
    console.log("---1ra forma----", head1(miArray));

    console.log("---2da forma----", head2(miArray));

    console.log("---3ra forma----", head3(miArray));

    console.log("---4ta forma----");
    head4(miArray);

    console.log("---¿Se modificó el array?----", miArray);
}catch (error){
    console.error(error);
}