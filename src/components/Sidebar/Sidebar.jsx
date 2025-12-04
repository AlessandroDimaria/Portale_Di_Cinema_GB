import React, { useState } from "react";

export default function Sidebar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li className="sidebar-item">🏠 Homepage</li>
        <li className="sidebar-item">📂 Categories</li>
        <li className="sidebar-item">
          <button
            className="sidebar-search-btn"
            onClick={() => setShowSearch(!showSearch)}
          >
            🔍 Search
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
