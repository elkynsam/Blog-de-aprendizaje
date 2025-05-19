import React, { useEffect, useState } from "react";
import ArticleList from "../components/ArticleList";
import LearningTrackSelector from "../components/LearningTrackSelector";
import api from "../api/api";
import "../styles/main-styles.css";
import "../styles/navbar-styles.css";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [learningTracks, setLearningTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState("");

  useEffect(() => {
    api.get("/learning-tracks").then(res => setLearningTracks(res.data));
  }, []);

  useEffect(() => {
    let url = "/articles";
    if (selectedTrack) url += `?trackId=${selectedTrack}`;
    api.get(url).then(res => setArticles(res.data));
  }, [selectedTrack]);

  return (
    <div className="main-container">
      <div className="header-section">
        <h1>Artículos</h1>
        <LearningTrackSelector
          tracks={learningTracks}
          selected={selectedTrack}
          onChange={setSelectedTrack}
        />
      </div>
      <ArticleList articles={articles} />
    </div>
  );
}