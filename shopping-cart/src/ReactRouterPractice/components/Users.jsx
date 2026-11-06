function Users() {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "David" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Users</th>
          <th>View Details</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td> {user.name}</td>
            <td>
              <Link to={`/users/${user.id}`}>View Details</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default Users;
