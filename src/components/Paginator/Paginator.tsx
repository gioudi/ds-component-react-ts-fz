import React, { useState } from "react";

interface PaginatorProps {
  pageCount: number;
  pageRange: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Paginator: React.FC<PaginatorProps> = ({
  pageCount,
  pageRange,
  currentPage,
  onPageChange,
}) => {
  const [activePage, setActivePage] = useState(currentPage);

  const handlePageChange = (page: number) => {
    setActivePage(page);
    onPageChange(page);
  };

  const rendedPageNumbers = () => {
    const pages = [];

    for (let index = 1; index < pageCount; index++) {
      pages.push(
        <button
          key={index}
          className={`fz-paginator__button ${index === activePage ? "active" : ""}`}
          onClick={() => handlePageChange(index)}
        >
          {index}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="container">
      <div className="fz-paginator">
        <button
          className="fz-paginator__button"
          disabled={activePage === 1}
          onClick={() => handlePageChange(activePage - 1)}
        >
          Prev
        </button>
        {rendedPageNumbers()}
        <button
          className="fz-paginator__button"
          disabled={activePage === pageCount}
          onClick={() => handlePageChange(activePage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Paginator;
