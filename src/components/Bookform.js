import React, { useState } from "react";

function BookForm({ books, setBooks }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [isbn, setIsbn] = useState("");
    const [quantity, setQuantity] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!title || !author || !genre || !isbn || quantity === "") {
            alert("Please fill in all fields.");
            return;
        }

        const numberQuantity = Number(quantity);

        if (!Number.isInteger(numberQuantity) || numberQuantity < 0) {
            alert("Quantity must be a whole number of 0 or more.");
            return;
        }

        if (
            books.some(
                book =>
                    book.isbn.toLowerCase() === isbn.trim().toLowerCase()
            )
        ) {
            alert("A book with this ISBN already exists.");
            return;
        }

        const newBook = {
            id: Date.now(),
            title: title.trim(),
            author: author.trim(),
            genre: genre.trim(),
            isbn: isbn.trim(),
            quantity: numberQuantity
        };

        setBooks([...books, newBook]);

        setTitle("");
        setAuthor("");
        setGenre("");
        setIsbn("");
        setQuantity("");
    }

    return (
        <div className="form-panel">
            <h3>Add New Book</h3>

            <form onSubmit={handleSubmit} className="form-grid">
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Author</label>
                    <input
                        type="text"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Genre</label>
                    <input
                        type="text"
                        value={genre}
                        onChange={e => setGenre(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>ISBN</label>
                    <input
                        type="text"
                        value={isbn}
                        onChange={e => setIsbn(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Initial Quantity</label>
                    <input
                        type="number"
                        min="0"
                        value={quantity}
                        onChange={e => setQuantity(e.target.value)}
                    />
                </div>

                <div className="form-button">
                    <button className="primary-btn" type="submit">
                        Add Book
                    </button>
                </div>
            </form>
        </div>
    );
}

export default BookForm;