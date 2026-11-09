import { useState, useEffect, useRef } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";
function RaceConditions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const requestId = useRef(0);

  useEffect(() => {
    setLoading(true);
    setError(null);
    requestId.current += 1;
    const currentRequestId = requestId.current;
    async function fetchUsers() {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        if (currentRequestId === requestId.current) {
          // Update users
          setUsers(data);
        }
      } catch (err) {
        if (currentRequestId === requestId.current) {
          setError(err.message);
        }
      } finally {
        if (currentRequestId === requestId.current) {
          setLoading(false);
        }
      }
    }
    fetchUsers();
  }, [searchTerm]);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <input
        type="text"
        aria-label="Search"
        placeholder="Enter User Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading ? (
        <p>Loading Users</p>
      ) : error ? (
        <p>{error}</p>
      ) : filteredUsers.length === 0 ? (
        <p>No users of this name</p>
      ) : (
        <>
          {filteredUsers.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
        </>
      )}
    </div>
  );
}
export default RaceConditions;
