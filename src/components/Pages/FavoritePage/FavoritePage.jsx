import MovieCardTest from "../../MovieCardTest/MovieCardTest";
import { useMoviesApi } from "../../../context/MoviesContext";

const FavoritesPage = ({ onSelectMovie }) => {
  const { favorites } = useMoviesApi();

  return (
    <div className="main-content">
      <h2 className="section-title">I tuoi preferiti</h2>

      <div className="search-results-grid">
        {favorites.map((movie) => (
          <MovieCardTest
            key={movie.id}
            movie={movie}
            onClick={() => onSelectMovie(movie.id)}
          />
        ))}
      </div>

      {favorites.length === 0 && (
        <p className="status-text">Non hai ancora salvato nessun film.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
