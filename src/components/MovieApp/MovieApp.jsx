import { useState } from "react";

import Navbar from "../Navbar/Navbar";
import HomePage from "../Pages/HomePage/HomePage";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import FavoritesPage from "../Pages/FavoritePage/FavoritePage";

const MovieApp = () => {
  const [page, setPage] = useState("home");
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const handleSelectMovie = (id) => {
    setSelectedMovieId(id);
    setPage("details");
  };

  return (
    <>
      {/* 🔹 Passiamo a Navbar sia onNavigate che activePage */}
      <Navbar onNavigate={setPage} activePage={page} />

      {page === "home" && <HomePage onSelectMovie={handleSelectMovie} />}

      {page === "details" && (
        <DetailsPage movieId={selectedMovieId} onBack={() => setPage("home")} />
      )}

      {page === "favorites" && (
        <FavoritesPage onSelectMovie={handleSelectMovie} />
      )}
    </>
  );
};

export default MovieApp;
