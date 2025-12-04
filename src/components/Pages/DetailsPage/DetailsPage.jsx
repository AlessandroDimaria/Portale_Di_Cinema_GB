import MovieDetails from "../../MovieDetails/MovieDetails";

const DetailsPage = ({ onBack }) => {
  return (
    <div className="main-content">
      <button className="back-button" onClick={onBack}>
        ⟵ Indietro
      </button>

      <MovieDetails />
    </div>
  );
};

export default DetailsPage;
