
// Forma 2 --> con typescript

/*
    Interfaces en JS: En javascript no existen las interfaces como tal.
    La herencia en JS se basa en objetos, no en clases.
    En su lugar, JavaScript usa lo que se llama tipificación pato (duck typing). (Si camina como un pato y grazna como un
    pato, en lo que a JS le importa, es un pato). Si su objeto tiene métodos quack(), walk() y fly(), el código puede
    usarlo donde lo espere un objeto que puede caminar, graznar y volar, sin requerir la implementación de alguna
    interfaz "Duckable". La interfaz es exactamente el conjunto de funciones que usa el código (y los valores de
    retorno de esas funciones), y con la tipificación pato, lo obtienes gratis.


    Interfaces en TS: En typescript, las interfaces son como las clases en JS.
    Las interfaces no contienen implementación de sus métodos, por lo que la clase que implementa una interfaz debe
    escribir el código de todos los métodos que contiene.

    Las interfaces en TypeScript se declaran indicando la lista de propiedades y métodos que contendrán.
    Las propiedades no pueden tener valores y los métodos no pueden tener código para su implementación.
*/

// Creamos la clase Book que tiene como propiedades el título y si está leído o no
interface Book {
    title: string;
    isRead: boolean;
}



// Variable myBookList que contiene un array de objetos de tipo Book
const myBookList: Array<Book> = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];




// Implementamos una función isBookRead
// Recibe un array de objetos de tipo Book
// Devuelve un array formado por la variable isRead de cada objeto de tipo Book
function isBookRead(books: Book): boolean {
    return books.isRead;
}



// Implementamos una función isBookRead2
// Reciba un array de objetos de tipo Book y un título de tipo string
// Devuelva si el libro que ha recibido como parámetro, está leído o no
// function isBookRead(books: Array<Book>, title: string): boolean {
//     return books.find(book => book.title === title).isRead;
// }
function isBookRead2(myBookList, title:string) : boolean {
    let encontrado = false;
    for (let i = 0; i < myBookList.length; i++) {
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