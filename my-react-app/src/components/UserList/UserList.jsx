import { useState, useEffect } from "react";

function UsersList() {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const timer = setTimeout(async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        const filtered = data.filter((user) =>
          user.name.toLowerCase().includes(searchTerm.toLowerCase()),
        );

        setFilteredUsers(filtered);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }, 300);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [searchTerm]);

  return (
    <div>
      <h2>Search Users</h2>

      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {!loading &&
        !error &&
        filteredUsers.map((user) => <p key={user.id}>{user.name}</p>)}

      {!loading && !error && filteredUsers.length === 0 && (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default UsersList;
