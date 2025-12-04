import { useSearch } from "../../context/SearchContext";

const Navbar = ({ onNavigate }) => {
  const { query, search } = useSearch();

  return (
    <header className="navbar">
      <div className="navbar-logo">Absolute Cinema</div>

      <input
        className="navbar-search"
        type="text"
        placeholder="Cerca..."
        value={query}
        onChange={(e) => search(e.target.value)}
      />

      <nav className="navbar-links">
        <button onClick={() => onNavigate("home")} className="navbar-link">
          HOME
        </button>
        <button onClick={() => onNavigate("favorites")} className="navbar-link">
          FAVORITES
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
