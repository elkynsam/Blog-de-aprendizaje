import React from "react";
import { Link } from "react-router-dom";

export default function ArticleList({ articles }) {
  if (!articles.length) {
    return <p className="text-gray-400">No hay artículos disponibles.</p>;
  }

  return (
    <ul className="article-list">
      {articles.map(article => (
        <li key={article._id} className="article-item">
          <div className="article-title">{article.headline}</div>
          <div className="article-description">{article.description}</div>
          <Link
            to={`/article/${article._id}`}
            className="read-more-btn"
          >
            Leer más
          </Link>
        </li>
      ))}
    </ul>
  );
}