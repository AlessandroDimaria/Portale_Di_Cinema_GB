// src/components/SearchBar.jsx
import { useState } from "react";
import { useMoviesApi } from "../../context/MoviesContext";

const SearchBar = () => {
  const { searchMovies } = useMoviesApi();
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    searchMovies(value);
  };

  return (
    <form className="search-bar" onSubmit={submit}>
      <input
        className="search-input"
        placeholder="Cerca un film…"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="search-button">Cerca</button>
    </form>
  );
};

export default SearchBar;
