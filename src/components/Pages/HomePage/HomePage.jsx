import MovieCarouselTest from "../../MovieCarouselTest/MovieCarouselTest";
import { MOVIE_SECTIONS } from "../../../config-movie/movieSections";

const HomePage = ({ onSelectMovie }) => {
  return (
    <div className="main-content">
      {MOVIE_SECTIONS.map((section) => (
        <MovieCarouselTest
          key={section.key}
          section={section}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </div>
  );
};

export default HomePage;
