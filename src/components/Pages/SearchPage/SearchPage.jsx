import SearchBar from "../../SearchBar/SearchBar";
import SearchResults from "../../SearchResults/SearchResults";

const SearchPage = ({ onSelectMovie }) => {
  return (
    <div className="main-content">
      <SearchBar />
      <SearchResults onSelectMovie={onSelectMovie} />
    </div>
  );
};

export default SearchPage;
