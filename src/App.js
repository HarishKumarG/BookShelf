import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookSearchPage from "./pages/BookSearchPage";
import BookshelfPage from "./pages/BookshelfPage";
import Navigation from "./components/Navigation";
import "./App.css";

const App = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<BookSearchPage />} />
      <Route path="/bookshelf" element={<BookshelfPage />} />
    </Routes>
  </Router>
);

export default App;
