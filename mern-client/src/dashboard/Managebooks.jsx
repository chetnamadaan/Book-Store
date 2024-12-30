import React, { useEffect, useState } from "react";

export default function ManageBooks() {
    const [books, setBooks] = useState([]);
    const [editingBook, setEditingBook] = useState(null);
    const [updatedBook, setUpdatedBook] = useState({
        bookTitle: "",
        authorName: "",
        category: "",
        bookDescription: "",
        bookPdfUrl: "",
        imageUrl: ""
    });

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await fetch("http://localhost:5000/all-books");
            const data = await response.json();
            setBooks(data);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    const handleEditClick = (book) => {
        setEditingBook(book);
        setUpdatedBook({ ...book });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedBook({ ...updatedBook, [name]: value });
    };

    const validateForm = () => {
        const { bookTitle, authorName, category, bookDescription, bookPdfUrl, imageUrl } = updatedBook;
        if (!bookTitle || !authorName || !category || !bookDescription || !bookPdfUrl || !imageUrl) {
            alert("All fields are required");
            return false;
        }
        return true;
    };

    const handleUpdateBook = async () => {
        try {
            const { _id, ...bookData } = updatedBook;
    
            console.log("Updating book with data:", bookData);
    
            const response = await fetch(`http://localhost:5000/book/${editingBook._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(bookData)
            });
    
            const data = await response.json();
    
            if (response.ok) {
                console.log("Book updated successfully:", data);
                fetchBooks();  
                setEditingBook(null); 
            } else {
                console.error("Failed to update book:", data.message || data.error || "Unknown error");
            }
        } catch (error) {
            console.error("Error updating book:", error);
        }
    };

    const handleDeleteBook = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this book?");
        if (!confirmDelete) return;

        try {
            const response = await fetch(`http://localhost:5000/book/${id}`, {
                method: "DELETE"
            });
            if (response.ok) {
                console.log("Book deleted successfully");
                fetchBooks(); 
            } else {
                console.error("Failed to delete book");
                alert("Failed to delete book. Please try again.");
            }
        } catch (error) {
            console.error("Error deleting book:", error);
            alert("An error occurred while deleting the book. Please try again.");
        }
    };

    return (
        <div className="container mx-auto p-4" style={{ backgroundColor: '#f7f7f7' }}>
            <h2 className="text-2xl font-bold text-center mb-6">Manage Books</h2>
            <table className="table-auto w-full bg-white shadow-lg">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2">Title</th>
                        <th className="px-4 py-2">Author</th>
                        <th className="px-4 py-2">Category</th>
                        <th className="px-4 py-2">Description</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book._id} className="border-t">
                            <td className="px-4 py-2">{book.bookTitle}</td>
                            <td className="px-4 py-2">{book.authorName}</td>
                            <td className="px-4 py-2">{book.category}</td>
                            <td className="px-4 py-2">
                                {book.bookDescription.length > 50
                                    ? `${book.bookDescription.slice(0, 50)}...`
                                    : book.bookDescription}
                            </td>
                            <td className="px-4 py-2 flex gap-2">
                                <button
                                    onClick={() => handleEditClick(book)}
                                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteBook(book._id)}
                                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editingBook && (
                <div className="mt-6 p-4 border rounded bg-gray-50">
                    <h3 className="text-xl font-bold mb-4">Edit Book</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="bookTitle"
                            value={updatedBook.bookTitle}
                            onChange={handleInputChange}
                            placeholder="Book Title"
                            className="p-2 border rounded"
                        />
                        <input
                            type="text"
                            name="authorName"
                            value={updatedBook.authorName}
                            onChange={handleInputChange}
                            placeholder="Author Name"
                            className="p-2 border rounded"
                        />
                        <input
                            type="text"
                            name="category"
                            value={updatedBook.category}
                            onChange={handleInputChange}
                            placeholder="Category"
                            className="p-2 border rounded"
                        />
                        <textarea
                            name="bookDescription"
                            value={updatedBook.bookDescription}
                            onChange={handleInputChange}
                            placeholder="Book Description"
                            className="p-2 border rounded col-span-2"
                        />
                        <input
                            type="text"
                            name="bookPdfUrl"
                            value={updatedBook.bookPdfUrl}
                            onChange={handleInputChange}
                            placeholder="PDF URL"
                            className="p-2 border rounded"
                        />
                        <input
                            type="text"
                            name="imageUrl"
                            value={updatedBook.imageUrl}
                            onChange={handleInputChange}
                            placeholder="Image URL"
                            className="p-2 border rounded"
                        />
                    </div>
                    <button
                        onClick={handleUpdateBook}
                        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Save Changes
                    </button>
                    <button
                        onClick={() => setEditingBook(null)}
                        className="mt-4 ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                </div>
            )}
        </div>
    );
}
