import { useMoviesApi } from "../../context/MoviesContext";

const MovieDetails = () => {
  const { selectedMovie, detailsLoading } = useMoviesApi();

  if (detailsLoading) return <p className="status-text">Caricamento…</p>;
  if (!selectedMovie) return null;

  return (
    <div className="details">
      <img
        className="details-poster"
        src={import.meta.env.VITE_IMAGE_BASE_URL + selectedMovie.poster_path}
      />

      <div className="details-content">
        <h1>{selectedMovie.title}</h1>
        <p>{selectedMovie.overview}</p>

        <p className="details-meta">
          Rating: {selectedMovie.vote_average} • {selectedMovie.release_date}
        </p>

        <p className="details-genres">
          {selectedMovie.genres?.map((g) => g.name).join(", ")}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
