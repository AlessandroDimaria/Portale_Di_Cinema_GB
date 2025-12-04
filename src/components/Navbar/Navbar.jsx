const Navbar = ({ currentPage, onChangePage }) => {
  return (
    <header className="navbar">
      <div className="navbar-logo">Absolute Cinema</div>

      <nav className="navbar-links">
        {["home", "search", "favorites"].map((page) => (
          <button
            key={page}
            className={`navbar-link ${
              currentPage === page ? "navbar-link--active" : ""
            }`}
            onClick={() => onChangePage(page)}
          >
            {page.toUpperCase()}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
