import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MoviesProvider } from "./context/MoviesContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import { UIProvider } from "./context/UIContext.jsx";
import { GenreProvider } from "./context/GenreContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UIProvider>
      <SearchProvider>
        <GenreProvider>
          <FavoritesProvider>
            <App />
          </FavoritesProvider>
        </GenreProvider>
      </SearchProvider>
    </UIProvider>
  </StrictMode>
);
