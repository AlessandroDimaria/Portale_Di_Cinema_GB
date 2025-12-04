import React from "react";

export default function Featured({ show }) {
  if (!show) return null;

  return (
    <div className="featured">
      <h1 className="title">Absolute Cinema</h1>
      <div className="show-banner">
        <img
          src={`https://image.tmdb.org/t/p/w780${show.backdrop_path}`}
          alt={show.title}
        />
        <div className="rating">IMDb {show.vote_average}/10</div>
      </div>
    </div>
  );
}
