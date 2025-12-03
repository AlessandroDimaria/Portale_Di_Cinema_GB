import { useState, useEffect } from "react";
import { apiService } from "../api/apiService";

export const useMovies = (type, queryOrId = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      let result = null;

      switch (type) {
        case "popular":
          result = await apiService.getPopular();
          break;

        case "topRated":
          result = await apiService.getTopRated();
          break;

        case "trending":
          result = await apiService.getTrending();
          break;

        case "upcoming":
          result = await apiService.getUpcoming();
          break;

        case "search":
          result = await apiService.searchMovies(queryOrId);
          break;

        case "details":
          result = await apiService.getMovieDetails(queryOrId);
          break;

        case "credits":
          result = await apiService.getMovieCredits(queryOrId);
          break;

        case "collections":
          result = await apiService.getCollections();
          break;

        default:
          throw new Error("Tipo di fetch non valido in useMovies");
      }

      setData(result);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [type, queryOrId]);

  return { data, loading, error };
};
