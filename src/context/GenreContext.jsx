import { createContext, useContext, useState } from "react";
import { apiService } from "../api/apiService";

const GenreContext = createContext();

export const GenreProvider = ({ children }) => {
  const [genreId, setGenreId] = useState(null);
  const [genreName, setGenreName] = useState("");
  const [genreResults, setGenreResults] = useState(null);

  const selectGenre = async (id, name) => {
    setGenreId(id);
    setGenreName(name);

    if (!id) {
      setGenreResults(null);
      return;
    }

    const data = await apiService.getMoviesByGenre(id);
    setGenreResults(data.results);
  };

  const clearGenre = () => {
    setGenreId(null);
    setGenreName("");
    setGenreResults(null);
  };

  return (
    <GenreContext.Provider
      value={{ genreId, genreName, genreResults, selectGenre, clearGenre }}
    >
      {children}
    </GenreContext.Provider>
  );
};

export const useGenre = () => useContext(GenreContext);
