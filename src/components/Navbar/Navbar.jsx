import { useSearch } from "../../context/SearchContext";
import { useUI } from "../../context/UIContext";

const Navbar = ({ onNavigate, activePage }) => {
  const { query, search } = useSearch();
  const { showNavbarSearch, setShowNavbarSearch } = useUI();

  const handleCloseSearch = () => {
    search(""); // 🔹 svuota il campo di ricerca
    setShowNavbarSearch(false); // 🔹 chiude l’input nella navbar
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
        <button
          onClick={() => onNavigate("genre")}
          className={`navbar-link ${activePage === "genre" ? "active" : ""}`}
        >
          GENRE
        </button>
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
