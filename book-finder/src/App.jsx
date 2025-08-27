import React, { useState } from "react";
import { Searchbar } from "./Components/Searchbar";
import Booklist from "./Components/Booklist";
import './App.css'
function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async (query) => {
    if (!query) return;
    setLoading(true);
    try {
      const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await res.json();
      setBooks(data.items || []);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
    setLoading(false);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">📚 Book Finder</h1>
      <Searchbar onSearch={fetchBooks} />
      
      {loading ? (
        <div className="text-center mt-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Booklist books={books} />
      )}
    </div>
  );
}

export default App;
