function UsersList({ currentUsers }) {
  return (
    <div>
      {currentUsers.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default UsersList;
