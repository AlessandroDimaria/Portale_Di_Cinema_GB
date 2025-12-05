import "./Sidebar.css";
import { useUI } from "../../context/UIContext";

export default function Sidebar() {
  const { setShowNavbarSearch } = useUI();

  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li className="sidebar-item" title="Home">
          🏠
        </li>
        <li className="sidebar-item" title="Categorie">
          📂
        </li>

        <li className="sidebar-item" title="Cerca">
          <button
            className="sidebar-search-btn"
            onClick={() => setShowNavbarSearch(true)}
          >
            🔍
          </button>
        </li>
      </ul>
    </aside>
  );
}
