import { useFavorites } from "../../../context/FavoritesContext";
import MovieCardTest from "../../MovieCardTest/MovieCardTest";

const FavoritesPage = ({ onSelectMovie }) => {
  const { favorites } = useFavorites();

  return (
    <div className="main-content">
      <h2>I tuoi film preferiti</h2>

      <div className="search-results-grid">
        {favorites.map((movie) => (
          <MovieCardTest
            key={movie.id}
            movie={movie}
            onClick={() => onSelectMovie(movie.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
