import React, { useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import "./BookSearch.css";

const BookSearch = ({ onAddToBookshelf }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value.length > 0) {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://openlibrary.org/search.json`,
          {
            params: {
              q: e.target.value,
              limit: 10,
              page: 1,
            },
          }
        );
        setResults(response.data.docs);
      } catch (error) {
        console.error("Error fetching book data", error);
      } finally {
        setLoading(false); // Set loading state to false when fetching completes
      }
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={handleSearch}
      />
      {loading ? (
        <button className="loading-button" disabled>
          Loading...
        </button>
      ) : (
        <div className="results">
          {results.map((book) => (
            <BookCard
              key={book.key}
              book={book}
              onAddToBookshelf={onAddToBookshelf}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookSearch;
