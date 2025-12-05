// src/components/Navbar/Navbar.jsx

import { useState } from "react";
import { useSearch } from "../../context/SearchContext";
import { useUI } from "../../context/UIContext";
import { useGenre } from "../../context/GenreContext";

const Navbar = ({ onNavigate, activePage }) => {
  const { query, search } = useSearch();
  const { showNavbarSearch, setShowNavbarSearch } = useUI();
  const { genreName, selectGenre } = useGenre();

  const [showGenres, setShowGenres] = useState(false);

  const handleCloseSearch = () => {
    search("");
    setShowNavbarSearch(false);
  };

  const toggleGenres = () => {
    setShowGenres((prev) => !prev);
  };

  const handleGenreClick = (id, name) => {
    selectGenre(id, name); // salva ID e nome
    setShowGenres(false);
  };

  const handleHomeClick = () => {
    search(""); // reset search
    selectGenre(null, ""); // reset genere
    onNavigate("home"); // torna alla homepage
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">Absolute Cinema</div>

      <div className="navbar-center">
        {showNavbarSearch && (
          <div className="navbar-search-wrapper">
            <input
              className="navbar-search-active"
              type="text"
              placeholder="Cerca un film..."
              value={query}
              onChange={(e) => search(e.target.value)}
            />
            <button className="navbar-search-close" onClick={handleCloseSearch}>
              ✖
            </button>
          </div>
        )}
      </div>

      <nav className="navbar-links">
        {/* HOME */}
        <button
          onClick={handleHomeClick}
          className={`navbar-link ${activePage === "home" ? "active" : ""}`}
        >
          HOME
        </button>

        {/* GENRE DROPDOWN */}
        <div className="navbar-dropdown">
          <button
            onClick={toggleGenres}
            className={`navbar-link ${
              activePage?.startsWith("genre") ? "active" : ""
            }`}
          >
            {/* SE C'È UN GENERE → MOSTRA QUEL NOME */}
            {genreName ? genreName.toUpperCase() : "GENRE"} ▾
          </button>

          {showGenres && (
            <div className="navbar-dropdown-menu">
              <button onClick={() => handleGenreClick(28, "Action")}>
                Action
              </button>
              <button onClick={() => handleGenreClick(35, "Comedy")}>
                Comedy
              </button>
              <button onClick={() => handleGenreClick(18, "Drama")}>
                Drama
              </button>
              <button onClick={() => handleGenreClick(14, "Fantasy")}>
                Fantasy
              </button>
              <button onClick={() => handleGenreClick(27, "Horror")}>
                Horror
              </button>
            </div>
          )}
        </div>

        {/* FAVORITES */}
        <button
          onClick={() => onNavigate("favorites")}
          className={`navbar-link ${
            activePage === "favorites" ? "active" : ""
          }`}
        >
          FAVORITES
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
