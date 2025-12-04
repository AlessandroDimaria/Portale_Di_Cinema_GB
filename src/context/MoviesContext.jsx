import { createContext, useContext, useEffect, useState } from "react";
import { apiService } from "../api/apiService";
import { MOVIE_SECTIONS } from "../config-movie/movieSections";

const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [home, setHome] = useState({});
  const [homeLoading, setHomeLoading] = useState(true);
  const [homeError, setHomeError] = useState(null);

  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [searchLoading, setSearchLoading] = useState(false);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const toggleFavorite = (movie) => {
    setFavorites((prev) => {
      const exists = prev.some((m) => m.id === movie.id);
      const updated = exists
        ? prev.filter((m) => m.id !== movie.id)
        : [...prev, movie];

      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  useEffect(() => {
    const loadHome = async () => {
      try {
        setHomeLoading(true);

        const promises = MOVIE_SECTIONS.map((s) => apiService[s.fetch]());
        const results = await Promise.all(promises);

        const mapped = {};
        MOVIE_SECTIONS.forEach((s, i) => {
          mapped[s.key] = results[i];
        });

        setHome(mapped);
      } catch (err) {
        setHomeError(err.message);
      } finally {
        setHomeLoading(false);
      }
    };

    loadHome();
  }, []);

  const searchMovies = async (text) => {
    setQuery(text);
    if (!text.trim()) return setSearchResults(null);

    setSearchLoading(true);
    const data = await apiService.searchMovies(text);
    setSearchResults(data);
    setSearchLoading(false);
  };

  const loadDetails = async (id) => {
    setDetailsLoading(true);
    const data = await apiService.getMovieDetails(id);
    setSelectedMovie(data);
    setDetailsLoading(false);
  };

  return (
    <MoviesContext.Provider
      value={{
        // HOME
        home,
        homeLoading,
        homeError,

        // SEARCH
        query,
        searchResults,
        searchLoading,
        searchMovies,

        // DETAILS
        selectedMovie,
        detailsLoading,
        loadDetails,

        // FAVORITES
        favorites,
        toggleFavorite,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesApi = () => useContext(MoviesContext);
