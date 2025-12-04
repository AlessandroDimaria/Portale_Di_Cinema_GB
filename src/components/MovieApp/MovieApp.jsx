import { useState } from "react";
import { useMoviesApi } from "../../context/MoviesContext";

import Navbar from "../Navbar/Navbar";
import HomePage from "../Pages/HomePage/HomePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import DetailsPage from "../Pages//DetailsPage/DetailsPage";
import FavoritesPage from "../Pages/FavoritePage/FavoritePage";

const MovieApp = () => {
  const [page, setPage] = useState("home");
  const { loadDetails } = useMoviesApi();

  const onSelectMovie = (id) => {
    loadDetails(id);
    setPage("details");
  };

  return (
    <>
      <Navbar currentPage={page} onChangePage={setPage} />

      {page === "home" && <HomePage onSelectMovie={onSelectMovie} />}
      {page === "search" && <SearchPage onSelectMovie={onSelectMovie} />}
      {page === "details" && <DetailsPage onBack={() => setPage("home")} />}
      {page === "favorites" && <FavoritesPage onSelectMovie={onSelectMovie} />}
    </>
  );
};

export default MovieApp;
