import React from 'react';
import BookCard from "./Bookcard";

const Booklist = ({ books }) => {
  if (!books.length) return <p className="text-center mt-4">No books found. Try searching for something!</p>;

  return (
    <div className="row g-4 mt-3">
      {books.map((book) => (
        <div key={book.id} className="col-12 col-sm-6 col-lg-4">
          <BookCard book={book.volumeInfo} />
        </div>
      ))}
    </div>
  );
};

export default Booklist;
