// Función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro.
// En caso de no existir el libro devolver false

// Forma 1 --> con javascript
// Usando el método .find()
// Devuelve el valor del primer elemento del array que cumple la condición; de lo contrario, devuelve undefined.
function isBookRead(books, title) {

    // Primero verificamos que existe el libro en la lista.
    // Si existe devuelve la variable exists.isRead. Si no existe, devuelve false.
    // Uso una variable myTitle para guardar el título del libro que queremos buscar.
    // También podría usar let myTitle = [arguments[1]]; pero me mostrará el título entre []. No queda chulo
    let myTitle;
    const exists = books.find(
        book => {
            myTitle = title;
            return book.title === title;
        }
    )


    if (exists !== undefined) {
        console.log(`El libro: ${ myTitle }, existe en la lista y leído esta a:`);
        return exists.isRead;
    } else {
        console.log(`El libro: ${ myTitle }, NO existe en la lista luego leído esta a:`);
        return false;
    }
}


const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];


console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
console.log(isBookRead(books, "Harry Potter y la piedra filosofal")); // true
