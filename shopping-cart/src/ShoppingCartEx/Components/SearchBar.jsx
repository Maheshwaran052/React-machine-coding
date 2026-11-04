import { useContext } from "react";
import ShoppingContext from "./ShoppingContext";

function SearchBar() {
  const { searchTerm, setSearchTerm } = useContext(ShoppingContext);
  return (
    <div>
      <h2>Search</h2>
      <input
        type="text"
        placeholder="Enter Search term"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
export default SearchBar;
