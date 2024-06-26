import React from "react";
import "./BookCard.css";

const BookCard = ({ book, onAddToBookshelf }) => (
  <div className="book-card">
    <h3>{book.title}</h3>
    <p>{book.author_name ? book.author_name.join(", ") : "Unknown Author"}</p>
    <button onClick={() => onAddToBookshelf(book)}>Add to Bookshelf</button>
  </div>
);

export default BookCard;
