var bookshelves = [];
var findByGenre = genre => s => s.genre === genre;
var findByTitle = title => s => s.title === title;


window.onload = function () {
    main();
};

main = function () {
    listBooks(library);
    createShelves(library);
    sortBooks(library, bookshelves)
    clearShelves(bookshelves); // Final cleaning, do not remove
    console.log(this.bookshelves);
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

    console.log(genres);
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

    console.log(shelves);
    bookshelves = shelves;
}

// place books in shelf based on primary genre
sortBooks = function (books, shelves) {
    books.forEach(book => {
        // TODO: convert block to own function
        book.place = 'initial';
        const genre = book.genres[0];
        const shelf = shelves.find(findByGenre(genre));
        shelf.books.push(book);
    })
    clearShelves(shelves);
    shiftBooks(shelves);
};

// remove empty bookshelves
clearShelves = function (shelves) {
    let indices = [];
    for (let shelf of shelves) {
        console.log(shelf);
        if (shelf.books.length < 1) {
            indices.splice(-1, 0, shelves.indexOf(shelf))
        }
    }

    while (indices.length) {
        shelves.splice(indices.pop(), 1);
    }
}

// attempt to add book to shelf based on secondary genre if alone on shelf
shiftBooks = function (shelves) {
    for (let shelf of shelves) {
        if (shelf.books.length === 1 &&
            shelf.books[0].genres > 1) {
            shelf.books.shift()
        }
    }
    
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

const library = [
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