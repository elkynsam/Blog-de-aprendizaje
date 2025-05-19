import { Link } from "react-router-dom";
import React from "react";
import "../styles/navbar-styles.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">postBlog</Link>
        <div className="navbar-links">
          <Link to="/">Artículos</Link>
          <Link to="/create">Nuevo artículo</Link>
        </div>
      </div>
    </nav>
  );
}