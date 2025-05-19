import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
import FeedbackList from "../components/FeedbackList";
import FeedbackForm from "../components/FeedbackForm";
import "../styles/main-styles.css";

export default function ArticleView() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    api.get(`/articles/${id}`).then(res => setArticle(res.data));
  }, [id]);

  return (
    <div className="main-container">
      {article ? (
        <>
          <h1 className="article-title detail-title">{article.headline}</h1>
          <div className="article-meta">
            <span className={`track-badge ${article.track?.name?.toLowerCase() || ""}`}>
              {article.track?.name}
            </span>
            <span className="article-date">
              {new Date(article.publishedAt).toLocaleString()}
            </span>
          </div>
          <p className="article-content">{article.description}</p>
          <section className="comments-section">
            <h2 className="comments-title">Comentarios</h2>
            <FeedbackForm articleId={id} onCommentAdded={() => {
              api.get(`/articles/${id}`).then(res => setArticle(res.data));
            }} />
            <FeedbackList articleId={id} />
          </section>
        </>
      ) : (
        <p>Cargando artículo...</p>
      )}
    </div>
  );
}