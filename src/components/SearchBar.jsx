const SearchBar = ({ searchText, setSearchText, searchWeather }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyUp={searchWeather}
      />
    </div>
  );
};

export default SearchBar;
