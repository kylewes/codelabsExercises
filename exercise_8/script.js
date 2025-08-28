class Book {
    constructor(title, pagesTotal, pagesRead) {
        this.title = title;
        this.pagesTotal = pagesTotal;
        this.pagesRead = pagesRead;
    }
    // Gets info from Class?
    get percentComplete() {
        return Math.round((this.pagesRead / this.pagesTotal)* 100);
    }

    // Called on new Books to add pages. 
    addReadPages(n){
    this.pagesRead = Math.min(this.pagesRead + n, this.pagesTotal);
    }
}

// Instance variables using the class.
const book1 = new Book("Clean Code", 464, 120);
const book2 = new Book("Moby Dick", 500, 300);
const book3 = new Book("Bible", 800, 21);

//Creates elements in the HTML to render info.
function renderBook(book) {
    const container = document.getElementById("book-info");

    const card = document.createElement("div");
    card.className = "book-card";
    card.textContent = `${book.title} ${book.percentComplete}% Complete`;
    container.appendChild(card);
}

renderBook(book1);
renderBook(book2);

// Calls Class method to add pages.
book3.addReadPages(60);

renderBook(book3);