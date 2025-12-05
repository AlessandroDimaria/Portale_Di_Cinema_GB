import { useState } from "react";
import { useSearch } from "../../context/SearchContext";
import { useUI } from "../../context/UIContext";

const Navbar = ({ onNavigate, activePage }) => {
  const { query, search } = useSearch();
  const { showNavbarSearch, setShowNavbarSearch } = useUI();

  const [showGenres, setShowGenres] = useState(false);

  const handleCloseSearch = () => {
    search("");
    setShowNavbarSearch(false);
  };

  const toggleGenres = () => {
    setShowGenres((prev) => !prev);
  };

  const handleGenreClick = (genre) => {
    onNavigate(`genre-${genre}`);
    setShowGenres(false);
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
        <button
          onClick={() => onNavigate("home")}
          className={`navbar-link ${activePage === "home" ? "active" : ""}`}
        >
          HOME
        </button>

        <div className="navbar-dropdown">
          <button
            onClick={toggleGenres}
            className={`navbar-link ${
              activePage?.startsWith("genre") ? "active" : ""
            }`}
          >
            GENRE ▾
          </button>

          {showGenres && (
            <div className="navbar-dropdown-menu">
              <button onClick={() => handleGenreClick("action")}>Action</button>
              <button onClick={() => handleGenreClick("comedy")}>Comedy</button>
              <button onClick={() => handleGenreClick("drama")}>Drama</button>
              <button onClick={() => handleGenreClick("fantasy")}>
                Fantasy
              </button>
              <button onClick={() => handleGenreClick("horror")}>Horror</button>
            </div>
          )}
        </div>

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
