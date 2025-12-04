import MovieCardTest from "../MovieCardTest/MovieCardTest";
import { useMoviesApi } from "../../context/MoviesContext";

const SearchResults = ({ onSelectMovie }) => {
  const { query, searchResults, searchLoading, searchError } = useMoviesApi();

  if (!query) return null;
  if (searchLoading) return <p className="status-text">Caricamento…</p>;
  if (searchError)
    return <p className="status-text status-text--error">{searchError}</p>;

  const items = searchResults?.results || [];

  return (
    <section className="section">
      <h2 className="section-title">
        Risultati per: <span className="highlight">"{query}"</span>
      </h2>

      <div className="search-results-grid">
        {items.map((movie) => (
          <MovieCardTest
            key={movie.id}
            movie={movie}
            onClick={() => onSelectMovie(movie.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default SearchResults;
