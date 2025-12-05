import { useState, useEffect } from "react";

// La funzione che hai definito
const getTrailer = async (id) => {
  const url = `${import.meta.env.VITE_BASE_URL}/movie/${id}/videos?api_key=${
    import.meta.env.VITE_API_KEY
  }`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const IMG_BASE = "https://image.tmdb.org/t/p/w500";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [trailerKey, setTrailerKey] = useState(null);

  // Carico una lista di film popolari
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BASE_URL}/movie/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=it-IT`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  // Al click su un film recupero il trailer
  const handleClick = async (id) => {
    const data = await getTrailer(id);
    const trailer = data.results.find(
      (v) => v.type === "Trailer" && v.site === "YouTube"
    );
    if (trailer) {
      setTrailerKey(trailer.key);
    } else {
      alert("Trailer non disponibile");
    }
  };

  return (
    <div>
      <h2>Film popolari</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            style={{ width: "200px", cursor: "pointer" }}
            onClick={() => handleClick(movie.id)}
          >
            <img
              src={`${IMG_BASE}${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%" }}
            />
            <h4>{movie.title}</h4>
          </div>
        ))}
      </div>

      {trailerKey && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <button onClick={() => setTrailerKey(null)}>Chiudi</button>
          </div>
        </div>
      )}
    </div>
  );
}