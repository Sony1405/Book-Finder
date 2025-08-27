import React, { useState } from 'react';

export const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-center mb-4">
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="form-control w-50 me-2"
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};
