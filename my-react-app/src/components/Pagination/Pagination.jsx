function Pagination({ page, totalPages, onPageChange }) {
  function previous() {
    onPageChange(Math.max(1, page - 1));
  }
  function next() {
    onPageChange(Math.min(totalPages, page + 1));
  }

  return (
    <div>
      <p>
        Page {page} of {totalPages}
      </p>
      <button onClick={previous} disabled={page === 1}>
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            disabled={page === pageNumber}
          >
            PageNumber
          </button>
        ),
      )}
      <button onClick={next} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
}
export default Pagination;
