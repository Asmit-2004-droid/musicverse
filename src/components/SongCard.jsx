import React from "react";
import "./SongCard.css";

function SongCard({ title, artist, image }) {
  return (
    <div className="song-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{artist}</p>
    </div>
  );
}

export default SongCard;
