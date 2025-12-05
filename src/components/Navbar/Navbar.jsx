// src/components/Navbar/Navbar.jsx

import { useState } from "react";
import { useSearch } from "../../context/SearchContext";
import { useUI } from "../../context/UIContext";
import { useGenre } from "../../context/GenreContext";

const Navbar = ({ onNavigate, activePage }) => {
  const { query, search } = useSearch();
  const { showNavbarSearch, setShowNavbarSearch } = useUI();
<<<<<<< HEAD
  const { genreName, selectGenre } = useGenre();

  const [showGenres, setShowGenres] = useState(false);

=======
  const { selectGenre, clearGenre, genreName } = useGenre();

  const [showGenres, setShowGenres] = useState(false);

  // 🔍 chiude barra ricerca
>>>>>>> develop
  const handleCloseSearch = () => {
    search("");
    setShowNavbarSearch(false);
  };

<<<<<<< HEAD
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
=======
  // 🏠 HOME → reset genere + reset ricerca
  const handleHomeClick = () => {
    clearGenre();
    search("");
    onNavigate("home");
    setShowGenres(false);
  };

  // 🎭 selezione genere
  const handleGenreClick = (id, name) => {
    selectGenre(id, name);
    onNavigate("home");
    setShowGenres(false);
>>>>>>> develop
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">Absolute Cinema</div>

<<<<<<< HEAD
=======
      {/* 🔍 SEARCH BAR */}
>>>>>>> develop
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

<<<<<<< HEAD
=======
      {/* 🔗 NAV LINKS */}
>>>>>>> develop
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
            onClick={() => setShowGenres((prev) => !prev)}
            className={`navbar-link ${
              activePage?.startsWith("genre") ? "active" : ""
            }`}
          >
<<<<<<< HEAD
            {/* SE C'È UN GENERE → MOSTRA QUEL NOME */}
            {genreName ? genreName.toUpperCase() : "GENRE"} ▾
=======
            {/* 👉 SE UN GENERE È SELEZIONATO MOSTRA IL NOME */}
            {genreName ? `${genreName} ▾` : "GENRE ▾"}
>>>>>>> develop
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
