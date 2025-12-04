import { createContext, useContext, useState } from "react";
import { apiService } from "../api/apiService";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);

  const search = async (text) => {
    setQuery(text);

    if (!text.trim()) {
      setResults(null);
      return;
    }

    const data = await apiService.searchMovies(text);
    setResults(data.results);
  };

  return (
    <SearchContext.Provider value={{ query, results, search }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
