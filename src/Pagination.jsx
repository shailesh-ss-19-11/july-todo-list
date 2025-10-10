import React, { useState } from "react";

const Pagination = () => {
  const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`); // total 50 items
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate indexes
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Handle Page Change
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Pagination Example</h2>

      {/* Display Items */}
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            style={{
              margin: "0 5px",
              backgroundColor: currentPage === index + 1 ? "#007bff" : "#fff",
              color: currentPage === index + 1 ? "#fff" : "#000",
              border: "1px solid #007bff",
              borderRadius: "4px",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
