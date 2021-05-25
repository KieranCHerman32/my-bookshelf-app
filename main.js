// TODO: Implement Goodreads API

var bookshelves = [];
var booksToModify = [];
var findByGenre = genre => s => s.genre === genre;
var findByGenreNested = genre => s => s.genres[0] === genre;
var findByTitle = title => s => s.title === title;
var findBook = book => s === book;

window.onload = function () {
    main(library);
};

main = function (books) {
    // listBooks(books);
    createShelves(books);
    sortBooks(books, bookshelves)
    clearShelves(bookshelves); // Final cleaning, do not remove
}

// list all books in library
listBooks = function (books) {
    books.forEach(book => {
        console.log(book);
    });
}

// list all genres in library
listGenres = function (books) {
    const genres = [];
    books.forEach(book => {
        book.genres.forEach(genre => {
            if (!genres.includes(genre)) {
                genres.push(genre);
            }
        })
    })
    return genres;
}

// create shelves based on genres
createShelves = function (books) {
    const shelves = [];
    listGenres(books).forEach(genre => {
        shelves.push(
            new Shelf(genre, [])
        )
    })
    bookshelves = shelves;
}

// place books in shelf based on primary genre
sortBooks = function (books, shelves) {
    books.forEach(book => {
        addBook(book, shelves);
    });
    clearShelves(shelves);
    // shiftBooks(shelves);
};

// remove empty bookshelves
clearShelves = function (shelves) {
    let indices = [];
    for (let shelf of shelves) {
        if (shelf.books.length < 1) {
            indices.splice(-1, 0, shelves.indexOf(shelf))
        }
    }

    while (indices.length) {
        shelves.splice(indices.pop(), 1);
    }
}

// attempt to add book to shelf based on secondary genre if alone on shelf
// shiftBooks = function (shelves) {
//     for (const shelf of shelves) {
//         if (shelf.books.length === 1 && shelf.books[0].genres.length > 1) {
//             for (const book of shelf.books) {
//                 // const genre = shelf.books[0].genres[0];
//                 // const selectedBook = library.find(findByGenreNested(genre));
//             }
//         }
//     }
// }

addBook = function (book, shelves) {
    book.place = 'initial';
    const genre = book.genres[0];
    const shelf = shelves.find(findByGenre(genre));
    shelf.books.push(book);
}

class Book {
    constructor(title, authors, genres, place) {
        this.title = title;
        this.authors = authors;
        this.genres = genres;
        this.place = place;
    }
}

class Shelf {
    constructor(genre, books) {
        this.genre = genre;
        this.books = books;
    }
}

var library = [
    book = new Book(
        'title',
        [
            'author1',
            'author2'
        ],
        [
            'genre1',
            'genre2'
        ]
    ),
    book = new Book(
        'title',
        [
            'author1',
            'author2'
        ],
        [
            'genre2',
            'genre4',
            'genre3',
            'horror'
        ]
    )
]