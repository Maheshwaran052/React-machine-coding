import { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";
import UsersList from "../UserList/UserList";

const API_URL = "https://jsonplaceholder.typicode.com/users";

function UsersDirectory() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const pageSize = 5;

  // 1. Debounce search text
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setPage(1);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // 2. Fetch users once
  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(API_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchUsers();

    return () => controller.abort();
  }, []);

  // 3. Filter users
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(debouncedSearch.toLowerCase()),
  );

  // 4. Paginate filtered users
  const totalPages = Math.max(1, Math.ceil(filteredUsers.length / pageSize));

  const startIndex = (page - 1) * pageSize;

  const currentItems = filteredUsers.slice(startIndex, startIndex + pageSize);

  function onSearchChange(newValue) {
    setSearchTerm(newValue);
  }

  function onPageChange(newValue) {
    setPage(newValue);
  }

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />

      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p>{error}</p>
      ) : filteredUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <>
          <UsersList currentUsers={currentItems} />

          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </>
      )}
    </div>
  );
}

export default UsersDirectory;
