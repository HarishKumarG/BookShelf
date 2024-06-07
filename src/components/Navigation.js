import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <div className="navbar">
    <Link to="/" className="nav-link">
      Search Books
    </Link>
    <Link to="/bookshelf" className="nav-link">
      My Bookshelf
    </Link>
  </div>
);

export default Navigation;
