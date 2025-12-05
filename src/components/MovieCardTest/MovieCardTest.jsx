const MovieCardTest = ({ movie, onShowTrailer, onShowDetails }) => {
  const img = movie.poster_path
    ? import.meta.env.VITE_IMAGE_BASE_URL + movie.poster_path
    : "https://via.placeholder.com/500x300?text=No+Image";

  return (
    <div className="movie-card-wrapper">
      {/* POSTER → TRAILER */}
      <div className="movie-card" onClick={() => onShowTrailer(movie)}>
        <img src={img} className="movie-card-img" />
      </div>

      {/* TITOLO → DETTAGLI */}
      <h4 className="movie-card-title" onClick={() => onShowDetails(movie.id)}>
        {movie.title}
      </h4>
    </div>
  );
};

export default MovieCardTest;
