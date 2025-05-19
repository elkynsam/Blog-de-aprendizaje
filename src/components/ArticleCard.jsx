import React from "react";
import { Link } from "react-router-dom";

function trackColor(trackName) {
  if (trackName === "Practicas") return "practicas";
  if (trackName === "Taller") return "taller";
  if (trackName === "Tecno") return "tecno";
  return "gray-400";
}

export default function ArticleCard({ article }) {
  return (
    <div className="bg-white rounded-lg shadow p-5 hover:shadow-lg flex flex-col gap-2 transition">
      <Link to={`/article/${article._id}`}>
        <h2 className="text-2xl font-bold mb-2 hover:underline">{article.headline}</h2>
      </Link>
      <span
        className={`text-xs font-semibold px-2 py-1 rounded bg-${trackColor(article.track?.name)} text-white w-fit`}
      >
        {article.track?.name}
      </span>
      <p className="text-gray-700">{article.description.substring(0, 120)}{article.description.length > 120 ? "..." : ""}</p>
      <Link
        to={`/article/${article._id}`}
        className="mt-2 text-tecno font-semibold hover:underline text-sm"
      >
        Ver más
      </Link>
    </div>
  );
}