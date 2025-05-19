import React, { useEffect, useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import "../styles/form-styles.css"; // Importa los estilos

export default function CreateArticle() {
  const [learningTracks, setLearningTracks] = useState([]);
  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("");
  const [trackId, setTrackId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/learning-tracks").then(res => setLearningTracks(res.data));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      const res = await api.post("/articles", { headline, description, trackId });
      navigate(`/article/${res.data._id}`);
    } catch (err) {
      setError(err.response?.data?.error || "Error al crear artículo");
    }
  }

  return (
    <div className="form-card">
      <h1 className="form-title">Nuevo Artículo</h1>
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="headline">Título</label>
        <input
          id="headline"
          className="form-input"
          placeholder="Título"
          value={headline}
          onChange={e => setHeadline(e.target.value)}
          required
        />
        <label className="form-label" htmlFor="description">Contenido</label>
        <textarea
          id="description"
          className="form-textarea"
          placeholder="Contenido"
          rows={6}
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
        <label className="form-label" htmlFor="track">Learning Track</label>
        <select
          id="track"
          className="form-select"
          value={trackId}
          onChange={e => setTrackId(e.target.value)}
          required
        >
          <option value="">Selecciona un Learning Track</option>
          {learningTracks.map(t => (
            <option key={t._id} value={t._id}>
              {t.name}
            </option>
          ))}
        </select>
        {error && <div className="form-error">{error}</div>}
        <button className="form-btn" type="submit">
          Publicar
        </button>
      </form>
    </div>
  );
}