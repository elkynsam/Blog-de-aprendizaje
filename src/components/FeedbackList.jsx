import React, { useEffect, useState } from "react";
import api from "../api/api";

export default function FeedbackList({ articleId }) {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    api.get(`/feedback/${articleId}`).then(res => setFeedbacks(res.data));
  }, [articleId]);

  if (!feedbacks.length) {
    return <p className="text-gray-400">Sé el primero en comentar.</p>;
  }

  return (
    <ul className="feedback-list">
      {feedbacks.map(fb => (
        <li key={fb._id} className="feedback-item">
          <div>
            <span className="feedback-author">{fb.authorName}</span>
            <span className="feedback-date">{new Date(fb.createdAt).toLocaleString()}</span>
          </div>
          <div className="feedback-message">{fb.message}</div>
        </li>
      ))}
    </ul>
  );
}