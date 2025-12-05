import { useState } from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li className="sidebar-item" title="Home">
          🏠
        </li>
        <li className="sidebar-item" title="Categorie">
          📂
        </li>

        <li className="sidebar-item sidebar-search-wrapper">
          <button
            className="sidebar-search-btn"
            onClick={() => setShowSearch(!showSearch)}
            title="Cerca"
          >
            🔍
          </button>

          {showSearch && (
            <div className="sidebar-search-dropdown">
              <input
                type="text"
                placeholder="Cerca un film..."
                className="sidebar-search-input"
              />
              <button className="sidebar-search-submit">Cerca</button>
            </div>
          )}
        </li>
      </ul>
    </aside>
  );
}
