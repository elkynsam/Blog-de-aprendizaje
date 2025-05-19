import React, { useState } from "react";
import api from "../api/api";
import "../styles/form-styles.css";

export default function FeedbackForm({ articleId, onCommentAdded }) {
  const [authorName, setAuthorName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      await api.post(`/feedback/${articleId}`, { authorName, message });
      setAuthorName("");
      setMessage("");
      if (onCommentAdded) onCommentAdded();
    } catch (err) {
      setError(err.response?.data?.error || "Error al enviar comentario");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <input
        className="form-input"
        placeholder="Tu nombre"
        value={authorName}
        onChange={e => setAuthorName(e.target.value)}
        required
      />
      <textarea
        className="form-textarea"
        placeholder="Escribe tu comentario"
        value={message}
        onChange={e => setMessage(e.target.value)}
        required
        rows={3}
      />
      {error && <div className="form-error">{error}</div>}
      <button
        type="submit"
        className="form-btn"
      >
        Comentar
      </button>
    </form>
  );
}