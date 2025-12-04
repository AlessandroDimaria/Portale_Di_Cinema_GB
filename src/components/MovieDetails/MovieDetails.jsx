import { useFavorites } from "../../context/FavoritesContext";

const MovieDetails = ({ movie, onBack }) => {
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="details">
      <button className="back-button" onClick={onBack}>
        ⬅ Torna indietro
      </button>

      <img
        className="details-poster"
        src={import.meta.env.VITE_IMAGE_BASE_URL + movie.poster_path}
      />

      <div className="details-content">
        <h1>{movie.title}</h1>

        <button
          className="favorite-button"
          onClick={() => toggleFavorite(movie)}
        >
          {isFavorite(movie.id)
            ? "Rimuovi dai preferiti"
            : "Aggiungi ai preferiti"}
        </button>

        <p className="details-meta">
          Rating: {movie.vote_average} • {movie.release_date}
        </p>

        <p className="details-genres">
          {movie.genres?.map((g) => g.name).join(", ")}
        </p>

        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
