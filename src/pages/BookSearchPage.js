import React, { useState, useEffect } from "react";
import BookSearch from "../components/BookSearch";
import "./BookSearchPage.css";

const BookSearchPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    setBookshelf(savedBookshelf);
  }, []);

  const handleAddToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="container">
      <h1>Book Search</h1>
      <BookSearch onAddToBookshelf={handleAddToBookshelf} />
    </div>
  );
};

export default BookSearchPage;
