import React from "react";

function LibrarianDashboard({ books, transactions }) {
    const totalBooks = books.reduce(
        (total, book) => total + Number(book.quantity),
        0
    );

    const lowStock = books.filter(
        book => Number(book.quantity) < 2
    );

    const users =
        JSON.parse(localStorage.getItem("users")) || [];

    return (
        <>
            <div className="dashboard-cards">
                <div className="dashboard-card">
                    <h3>Total Books</h3>
                    <p>{books.length}</p>
                </div>

                <div className="dashboard-card">
                    <h3>Available Copies</h3>
                    <p>{totalBooks}</p>
                </div>

                <div className="dashboard-card">
                    <h3>Low Stock</h3>
                    <p>{lowStock.length}</p>
                </div>

                <div className="dashboard-card">
                    <h3>Total Users</h3>
                    <p>{users.length}</p>
                </div>
            </div>

            <div className="content-card">
                <h3>Current Book Availability</h3>

                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Genre</th>
                                <th>ISBN</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>

                        <tbody>
                            {books.length === 0 ? (
                                <tr>
                                
                                </tr>
                            ) : (
                                books.map(book => (
                                    <tr
                                        key={book.id}
                                        className={
                                            Number(book.quantity) < 2
                                                ? "low-stock"
                                                : ""
                                        }
                                    >
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.genre}</td>
                                        <td>{book.isbn}</td>
                                        <td>{book.quantity}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default LibrarianDashboard;