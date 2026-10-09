import React from "react";
import BookForm from "../components/Bookform";
import BookList from "../components/BookList";

function Books({ books, setBooks, transactions }) {

    function updateBook(id) {
        const book = books.find(item => item.id === id);

        if (!book) return;

        const newTitle = prompt("Enter book title:", book.title);
        if (newTitle === null) return;

        const newAuthor = prompt("Enter author:", book.author);
        if (newAuthor === null) return;

        const newGenre = prompt("Enter genre:", book.genre);
        if (newGenre === null) return;

        const newISBN = prompt("Enter ISBN:", book.isbn);
        if (newISBN === null) return;

        if (
            books.some(
                item =>
                    item.id !== id &&
                    item.isbn.toLowerCase() ===
                        newISBN.trim().toLowerCase()
            )
        ) {
            alert("Another book already uses this ISBN.");
            return;
        }

        setBooks(
            books.map(item =>
                item.id === id
                    ? {
                          ...item,
                          title: newTitle.trim(),
                          author: newAuthor.trim(),
                          genre: newGenre.trim(),
                          isbn: newISBN.trim()
                      }
                    : item
            )
        );
    }

    function deleteBook(id) {
        const activeBorrow = transactions.some(
            transaction =>
                transaction.bookId === id &&
                transaction.type === "borrow" &&
                transaction.status === "Borrowed"
        );

        if (activeBorrow) {
            alert(
                "This book cannot be deleted because it is currently borrowed."
            );
            return;
        }

        if (window.confirm("Are you sure you want to delete this book?")) {
            setBooks(books.filter(book => book.id !== id));
        }
    }

    return (
        <main className="main-content">
            <div className="page-title">
                <h2>Book Management</h2>
                <p>Add, update and delete books.</p>
            </div>

            <BookForm
                books={books}
                setBooks={setBooks}
            />

            <BookList
                books={books}
                onUpdate={updateBook}
                onDelete={deleteBook}
            />
        </main>
    );
}

export default Books;