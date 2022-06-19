// Forma 2 --> con typescript
// Variable myBookList que contiene un array de objetos de tipo Book
var myBookList = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
// Implementamos una función isBookRead
// Recibe un array de objetos de tipo Book
// Devuelve un array formado por la variable isRead de cada objeto de tipo Book
function isBookRead(books) {
    return books.isRead;
}
// Implementamos una función isBookRead2
// Reciba un array de objetos de tipo Book y un título de tipo string
// Devuelva si el libro que ha recibido como parámetro, está leído o no
// function isBookRead(books: Array<Book>, title: string): boolean {
//     return books.find(book => book.title === title).isRead;
// }
function isBookRead2(myBookList, title) {
    var encontrado = false;
    for (var i = 0; i < myBookList.length; i++) {
        if (myBookList[i].title === title) {
            encontrado = true;
            return myBookList[i].isRead;
        }
    }
    if (!encontrado) {
        console.log("No se ha encontrado el libro");
        return false;
    }
}
// Pasamos el array de objetos de tipo Book a la función isBookRead
console.log(myBookList.map(isBookRead));
// Pasamos el array de objetos de tipo Book y el título de un libro a la función isBookRead2
console.log(isBookRead2(myBookList, "Devastaciónw")); // false
console.log(isBookRead2(myBookList, "Devastación")); // true
console.log(isBookRead2(myBookList, "Canción de hielo y fuego")); // false
console.log(isBookRead2(myBookList, "Los Pilares de la Tierra")); // false
console.log(isBookRead2(myBookList, "Harry Potter y la piedra filosofal")); // true
