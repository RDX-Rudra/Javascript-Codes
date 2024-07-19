function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    let read = false;

    this.toggleRead = function() {
        read = !read; // Toggle the read status
    };

    this.info = function() {
        if (read === true) {
            console.log("The " + this.title + " by " + this.author + ", " + this.pages + " pages, read.");
        } else {
            console.log("The " + this.title + " by " + this.author + ", " + this.pages + " pages, not read yet.");
        }
    };
}

const myLibrary = [];
function addBookToLibrary(Book){
    myLibrary.push(Book);
}

const theHobbit = new Book('theHobbit', 'J.R.R. Tolkien', 295);
theHobbit.info();
theHobbit.pages = 300;
theHobbit.toggleRead(); // Mark the book as read
theHobbit.info();
addBookToLibrary(theHobbit);
console.log(myLibrary);
const DSA = new Book('dsa', 'N. Karnmanchi', 650);
addBookToLibrary(DSA);
console.log(myLibrary);
