import { useEffect, useState } from "react";
import { apiService } from "../../../api/apiService";
import MovieDetails from "../../MovieDetails/MovieDetails";

export default function DetailsPage({ movieId, onBack }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const load = async () => {
      const data = await apiService.getMovieDetails(movieId);
      setMovie(data);
    };

    load();
  }, [movieId]);

  if (!movie) return <p>Caricamento…</p>;

  return <MovieDetails movie={movie} onBack={onBack} />;
}
