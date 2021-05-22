var bookshelves = [];

window.onload = function () {
    listBooks(library);
    // listGenres(library);
    createShelves(library);
    console.log(this.bookshelves);
};

listBooks = function (books) {
    books.forEach(book => {
        console.log(book);
    });
}

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

sortBooks = function (books, bookshelves) {
    books.forEach(book => {
        bookshelves.forEach(shelf => {
            if (book.genres[0] === shelf.genre) {
                shelf.push(book)
            }
        })
    })
};

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
    book2 = new Book(
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
    book2 = new Book(
        'title',
        [
            'author1',
            'author2'
        ],
        [
            'genre3',
            'genre4'
        ]
    )
]