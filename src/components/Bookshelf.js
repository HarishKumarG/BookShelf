import React from "react";
import "./Bookshelf.css";

const Bookshelf = ({ bookshelf }) => (
  <div className="bookshelf">
    {bookshelf.length === 0 ? (
      <p>No books in your bookshelf.</p>
    ) : (
      bookshelf.map((book, index) => (
        <div key={index} className="book-card">
          <h3>{book.title}</h3>
          <p>
            {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
          </p>
        </div>
      ))
    )}
  </div>
);

export default Bookshelf;
