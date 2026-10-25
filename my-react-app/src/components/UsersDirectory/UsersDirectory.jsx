import { useState, useEffect } from "react";

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

  function prev() {
    setPage((p) => Math.max(1, p - 1));
  }

  function next() {
    setPage((p) => Math.min(totalPages, p + 1));
  }

  return (
    <div>
      <h2>Search Users</h2>

      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading ? (
        <p>Loading users...</p>
      ) : error ? (
        <p>{error}</p>
      ) : filteredUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <>
          {currentItems.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}

          <p>
            Page {page} of {totalPages}
          </p>

          <button onClick={prev} disabled={page === 1}>
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                disabled={page === pageNumber}
              >
                {pageNumber}
              </button>
            ),
          )}

          <button onClick={next} disabled={page === totalPages}>
            Next
          </button>
        </>
      )}
    </div>
  );
}

export default UsersDirectory;
