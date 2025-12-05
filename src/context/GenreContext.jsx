import { createContext, useContext, useState } from "react";
import { apiService } from "../services/apiService";

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

  return (
    <GenreContext.Provider
      value={{ genreId, genreName, genreResults, selectGenre }}
    >
      {children}
    </GenreContext.Provider>
  );
};

export const useGenre = () => useContext(GenreContext);
