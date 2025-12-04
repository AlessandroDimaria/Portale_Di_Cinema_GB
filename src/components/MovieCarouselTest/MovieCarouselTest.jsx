import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import MovieCardTest from "../MovieCardTest/MovieCardTest";
import { useMoviesApi } from "../../context/MoviesContext";

import "swiper/css";
import "swiper/css/navigation";

const MovieCarousel = ({ section, onSelectMovie }) => {
  const { home, homeLoading, homeError } = useMoviesApi();

  if (homeLoading) return <p className="status-text">Caricamento…</p>;
  if (homeError)
    return <p className="status-text status-text--error">{homeError}</p>;

  const items = home[section.key]?.results || [];

  return (
    <section className="carousel-section">
      <h2 className="carousel-title">{section.title}</h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={35}
        slidesPerView={5}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1400: { slidesPerView: 7 },
        }}
        className="movie-swiper"
      >
        {items.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCardTest
              movie={movie}
              onClick={() => onSelectMovie(movie.id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MovieCarousel;
