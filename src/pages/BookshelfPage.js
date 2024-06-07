import React, { useState, useEffect } from "react";
import Bookshelf from "../components/Bookshelf";
import "./BookshelfPage.css";

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    setBookshelf(savedBookshelf);
  }, []);

  return (
    <div className="container">
      <h1>My Bookshelf</h1>
      <Bookshelf bookshelf={bookshelf} />
    </div>
  );
};

export default BookshelfPage;
