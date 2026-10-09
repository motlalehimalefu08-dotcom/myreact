import React from "react";

function TransactionList({
    transactions,
    isLibrarian,
    onDelete
}) {
    return (
        <div className="content-card">
            <h2>Transaction History</h2>

            <div className="table-container">
                <table id="transactionTable">
                    <thead>
                        <tr>
                            <th>Book</th>
                            <th>Type</th>
                            <th>Quantity</th>
                            <th>User</th>
                            <th>Date</th>
                            <th>Due Date</th>
                            <th>Returned</th>
                            <th>Status</th>

                            {isLibrarian && <th>Action</th>}
                        </tr>
                    </thead>

                    <tbody>
                        {transactions.length === 0 ? (
                            <tr>
                                <td colSpan={isLibrarian ? 9 : 8}>
                                </td>
                            </tr>
                        ) : (
                            transactions.map(transaction => (
                                <tr key={transaction.id}>
                                    <td>{transaction.bookTitle}</td>

                                    <td>
                                        {transaction.type === "add"
                                            ? "Stock Added"
                                            : transaction.type === "borrow"
                                            ? "Borrow"
                                            : "Return"}
                                    </td>

                                    <td>{transaction.quantity}</td>

                                    <td>{transaction.userName}</td>

                                    <td>{transaction.date}</td>

                                    <td>{transaction.dueDate}</td>

                                    <td>{transaction.returnedDate}</td>

                                    <td>{transaction.status}</td>

                                    {isLibrarian && (
                                        <td>
                                            <button
                                                className="delete-btn"
                                                onClick={() =>
                                                    onDelete(transaction.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    )}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TransactionList;