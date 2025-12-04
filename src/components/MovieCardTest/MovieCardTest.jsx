// src/components/MovieCardTest/MovieCardTest.jsx

const MovieCardTest = ({ movie, onClick }) => {
  const img = movie.poster_path
    ? import.meta.env.VITE_IMAGE_BASE_URL + movie.poster_path
    : "https://via.placeholder.com/500x300?text=No+Image";

  return (
    <div className="movie-card" onClick={onClick}>
      <img src={img} className="movie-card-img" />
    </div>
  );
};

export default MovieCardTest;
