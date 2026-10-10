import React from "react";

function TransactionForm({
    isLibrarian,
    books,
    availableBooks,
    transactionBook,
    setTransactionBook,
    transactionType,
    handleTypeChange,
    transactionQuantity,
    setTransactionQuantity,
    activeBorrow,
    onSubmit
}) {
    return (
        <div className="form-panel">
            <h2>Record Transaction</h2>

            <form onSubmit={onSubmit} className="form-grid">
                <div className="form-group">
                    <label>Book</label>

                    <select
                        value={transactionBook}
                        onChange={e => setTransactionBook(e.target.value)}
                    >
                        <option value="">Select Book</option>

                        {(isLibrarian ? books : availableBooks).map(book => (
                            <option key={book.id} value={book.id}>
                                {book.title} ({book.quantity} available)
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Transaction Type</label>

                    <select
                        value={transactionType}
                        onChange={handleTypeChange}
                    >
                        <option value="">Select Type</option>

                        {isLibrarian ? (
                            <option value="add">Add Stock</option>
                        ) : (
                            <>
                                <option
                                    value="borrow"
                                    disabled={!!activeBorrow}
                                >
                                    Borrow Book
                                </option>

                                <option
                                    value="return"
                                    disabled={!activeBorrow}
                                >
                                    Return Book
                                </option>
                            </>
                        )}
                    </select>
                </div>

                <div className="form-group">
                    <label>Quantity</label>

                    <input
                        type="number"
                        min="1"
                        placeholder="Enter quantity"
                        max={isLibrarian ? undefined : "1"}
                        value={transactionQuantity}
                        onChange={e =>
                            setTransactionQuantity(e.target.value)
                        }
                        readOnly={!isLibrarian}
                    />
                </div>

                <div className="form-button">
                    <button
                        className="primary-btn"
                        type="submit"
                        disabled={!transactionType}
                    >
                        Process Transaction
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TransactionForm;