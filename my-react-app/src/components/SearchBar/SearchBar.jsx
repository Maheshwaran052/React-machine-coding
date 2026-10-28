function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div>
      <h2>Search users</h2>
      <input
        type="text"
        placeholder="Enter name to search"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
export default SearchBar;
