import { useState } from "react";

const users = [
  { id: 1, name: "Arun" },
  { id: 2, name: "Bala" },
  { id: 3, name: "Charan" },
  { id: 4, name: "Divya" },
  { id: 5, name: "Esha" },
  { id: 6, name: "Farhan" },
  { id: 7, name: "Gokul" },
  { id: 8, name: "Hari" },
  { id: 9, name: "Indhu" },
  { id: 10, name: "Jeeva" },
  { id: 11, name: "Kiran" },
  { id: 12, name: "Lakshmi" },
];

function UsersPagination() {
  const [page, setPage] = useState(1);

  const pageSize = 5;

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentItems = users.slice(startIndex, endIndex);
  const totalPages = Math.ceil(users.length / pageSize);

  function previous() {
    setPage((prevPage) => Math.max(1, prevPage - 1));
  }

  function next() {
    setPage((nextPage) => Math.min(totalPages, nextPage + 1));
  }

  return (
    <div>
      {currentItems.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}

      <p>
        Page {page} of {totalPages}
      </p>

      <button onClick={previous} disabled={page === 1}>
        Previous
      </button>

      {/* Add numbered page buttons here */}
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
    </div>
  );
}

export default UsersPagination;
