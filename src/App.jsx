import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ArticleView from "./pages/ArticleView";
import CreateArticle from "./pages/CreateArticle";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<ArticleView />} />
          <Route path="/create" element={<CreateArticle />} />
        </Routes>
      </main>
    </Router>
  );
}