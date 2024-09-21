// Sample Book Data
const books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", status: "Read" },
    { title: "1984", author: "George Orwell", genre: "Dystopia", status: "Wishlist" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic", status: "Read" },
];

const history = [];

// Display Books
function displayBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    books.forEach((book, index) => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");
        bookElement.innerHTML = `
            <span>${book.title} by ${book.author} (${book.genre}) - ${book.status}</span>
            <button onclick="borrowBook(${index})">Borrow</button>
        `;
        bookList.appendChild(bookElement);
    });
}

// Book Search
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
    );
    displayFilteredBooks(filteredBooks);
});

function displayFilteredBooks(filteredBooks) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    filteredBooks.forEach((book, index) => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");
        bookElement.innerHTML = `
            <span>${book.title} by ${book.author} (${book.genre}) - ${book.status}</span>
            <button onclick="borrowBook(${index})">Borrow</button>
        `;
        bookList.appendChild(bookElement);
    });
}

// Borrowing Book
function borrowBook(index) {
    const borrower = prompt("Enter borrower's name:");
    if (borrower) {
        const date = new date().toLocaleDateString();
        const record = ${books[index].title} was borrowed by ${borrower} on ${ date };
        history.push(record);
        displayHistory();
    }
}

// Display Borrowing History
function displayHistory() {
    const historyLog = document.getElementById("historyLog");
    historyLog.innerHTML = "";
    history.forEach(entry => {
        const historyElement = document.createElement("div");
        historyElement.innerText = entry;
        historyLog.appendChild(historyElement);
    });
}

// Initial Display of Books
displayBooks();