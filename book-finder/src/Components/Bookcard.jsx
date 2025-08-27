import React from "react";
import "./book.css"; 

const Bookcard = ({ book }) => {
  const { title, authors, imageLinks, infoLink } = book;

  return (
    <div className="card h-100 p-3 d-flex flex-column book-card">
      <div className="d-flex justify-content-center">
        {imageLinks?.thumbnail ? (
          <img
            src={imageLinks.thumbnail}
            alt={title || "Book cover"}
            className="book-cover mb-3"
          />
        ) : (
          <div className="book-cover mb-3 bg-body-tertiary d-flex align-items-center justify-content-center text-muted">
            <span className="small">No Cover</span>
          </div>
        )}
      </div>

      <h2 className="h6 text-center fw-semibold book-title">{title}</h2>

      <p className="text-center small text-secondary book-authors">
        {authors ? authors.join(", ") : "Unknown Author"}
      </p>

      <div className="mt-auto text-center">
        <a
          href={infoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary px-3"
        >
          More Info
        </a>
      </div>
    </div>
  );
};

export default Bookcard;
