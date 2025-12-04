// src/pages/HomePage.jsx
import { useEffect, useState } from "react";
import { apiService } from "../../../api/apiService";
import { useSearch } from "../../../context/SearchContext";
import { MOVIE_SECTIONS } from "../../../config-movie/movieSections";

import MovieCarouselTest from "../../MovieCarouselTest/MovieCarouselTest";
import MovieCardTest from "../../MovieCardTest/MovieCardTest";

const HomePage = ({ onSelectMovie }) => {
  const { results, query } = useSearch();
  const [sections, setSections] = useState({});

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

  return (
    <main className="main-content">
      {/* 🔍 Risultati ricerca */}
      {query && results && (
        <section className="section">
          <h2>Risultati per "{query}"</h2>
          <div className="search-results-grid">
            {results.map((movie) => (
              <MovieCardTest
                key={movie.id}
                movie={movie}
                onClick={() => onSelectMovie(movie.id)}
              />
            ))}
          </div>
        </section>
      )}

      {/* 🎬 Caroselli Home */}
      {!query &&
        MOVIE_SECTIONS.map((sec) => (
          <MovieCarouselTest
            key={sec.key}
            title={sec.title}
            movies={sections[sec.key]}
            onSelectMovie={onSelectMovie}
          />
        ))}
    </main>
  );
};

export default HomePage;
