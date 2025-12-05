// src/components/MovieCarouselTest/MovieCarouselTest.jsx

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
  spaceBetween={20}
  breakpoints={{
    320: { slidesPerView: 2, spaceBetween: 10 },
    576: { slidesPerView: 3, spaceBetween: 15 },
    768: { slidesPerView: 4, spaceBetween: 20 },
    992: { slidesPerView: 5, spaceBetween: 25 },
    1200: { slidesPerView: 6, spaceBetween: 30 },
  }}
  className="movie-swiper"
>
  {movies.map((movie) => (
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

export default MovieCarouselTest;
