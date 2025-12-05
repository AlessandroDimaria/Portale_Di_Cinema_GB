import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import MovieCardTest from "../MovieCardTest/MovieCardTest";
import "swiper/css";
import "swiper/css/navigation";

const MovieCarouselTest = ({
  title,
  movies = [],
  onSelectMovie,
  onSelectTrailer,
}) => {
  if (!movies) return null;

  return (
    <section className="carousel-section">
      <h2 className="carousel-title">{title}</h2>

      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={6}
        spaceBetween={20}
        className="movie-swiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCardTest
              movie={movie}
              onShowTrailer={onSelectTrailer}
              onShowDetails={onSelectMovie}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MovieCarouselTest;
