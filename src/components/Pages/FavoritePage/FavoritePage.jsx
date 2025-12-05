import { useFavorites } from "../../../context/FavoritesContext";
import MovieCardTest from "../../MovieCardTest/MovieCardTest";
import Sidebar from "../../Sidebar/Sidebar";

const FavoritesPage = ({ onSelectMovie }) => {
  const { favorites } = useFavorites();

  return (
    <div className="page-layout">
      <Sidebar />

      <main className="page-main">
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
      </main>
    </div>
  );
};

export default FavoritesPage;
