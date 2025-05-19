import React from "react";

export default function LearningTrackSelector({ tracks, selected, onChange }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <label className="font-semibold">Filtrar por track:</label>
      <select
        className="p-2 rounded border"
        value={selected}
        onChange={e => onChange(e.target.value)}
      >
        <option value="">Todos</option>
        {tracks.map(t => (
          <option key={t._id} value={t._id}>
            {t.name}
          </option>
        ))}
      </select>
    </div>
  );
}