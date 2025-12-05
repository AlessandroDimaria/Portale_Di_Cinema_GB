import { useEffect, useState } from "react";
import { apiService } from "../../../api/apiService";
import { useSearch } from "../../../context/SearchContext";
import { useGenre } from "../../../context/GenreContext";
import { MOVIE_SECTIONS } from "../../../config-movie/movieSections";

import Sidebar from "../../Sidebar/Sidebar";
import MovieCarouselTest from "../../MovieCarouselTest/MovieCarouselTest";
import MovieCardTest from "../../MovieCardTest/MovieCardTest";
import MovieTrailerModal from "../../MovieTrailerModal/MovieTrailerModal";

const HomePage = ({ onSelectMovie }) => {
  const { results, query } = useSearch();
  const { genreResults, genreName } = useGenre();

  const [sections, setSections] = useState({});
  const [trailerKey, setTrailerKey] = useState(null);
  const [trailerBackdrop, setTrailerBackdrop] = useState(null);

  // FETCH SEZIONI HOME
  useEffect(() => {
    const load = async () => {
      const fetched = {};

      for (const section of MOVIE_SECTIONS) {
        const data = await apiService[section.fetch]();
        fetched[section.key] = data.results;
      }

      setSections(fetched);
    };

    load();
  }, []);

  // POSTER → TRAILER
  const handleShowTrailer = async (movie) => {
    const data = await apiService.getTrailer(movie.id);

    const trailer = data.results?.find(
      (v) => v.type === "Trailer" && v.site === "YouTube"
    );

    if (trailer) {
      setTrailerKey(trailer.key);
      setTrailerBackdrop(movie.backdrop_path);
    } else {
      alert("Trailer non disponibile");
    }
  };

  // TITOLO → DETTAGLI
  const handleShowDetails = (id) => {
    onSelectMovie(id);
  };

  const closeTrailer = () => {
    setTrailerKey(null);
    setTrailerBackdrop(null);
  };

  return (
    <div className="page-layout">
      <Sidebar />

      <main className="page-main">
        {/* 🔍 1) RISULTATI RICERCA */}
        {query && results && (
          <section className="section">
            <h2>Risultati per "{query}"</h2>

            <div className="search-results-grid">
              {results.map((movie) => (
                <MovieCardTest
                  key={movie.id}
                  movie={movie}
                  onShowTrailer={handleShowTrailer}
                  onShowDetails={handleShowDetails}
                />
              ))}
            </div>
          </section>
        )}

        {/* 🎭 2) RISULTATI GENERE */}
        {!query && genreResults && (
          <section className="section">
            <h2>Genere: {genreName}</h2>

            <div className="search-results-grid">
              {genreResults.map((movie) => (
                <MovieCardTest
                  key={movie.id}
                  movie={movie}
                  onShowTrailer={handleShowTrailer}
                  onShowDetails={handleShowDetails}
                />
              ))}
            </div>
          </section>
        )}

        {/* 🎬 3) SEZIONI HOME DI DEFAULT */}
        {!query &&
          !genreResults &&
          MOVIE_SECTIONS.map((sec) => (
            <MovieCarouselTest
              key={sec.key}
              title={sec.title}
              movies={sections[sec.key]}
              onSelectTrailer={handleShowTrailer}
              onSelectMovie={handleShowDetails}
            />
          ))}
      </main>

      <MovieTrailerModal
        trailerKey={trailerKey}
        backdrop={trailerBackdrop}
        onClose={closeTrailer}
      />
    </div>
  );
};

export default HomePage;
