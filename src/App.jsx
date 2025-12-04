import MoviesCarouselTest from "./components/MovieCarouselTest/MovieCarouselTest";
import MovieApp from "./components/MovieApp/MovieApp";
import "./App.css";
import Homepage from "./components/MovieHomepage/Homepage"; 

const App = () => {
  return (
    <>
  
      <MovieApp />
       <div className="app">
      <Homepage />
    </div>
    </>
  );
};

export default App;
