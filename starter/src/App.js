import "./App.css";
import { useState } from "react";
import * as BooksApi from "./BooksAPI";
import { useEffect } from "react";
function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  useEffect(() => {
    const getAll = async () => {
      const res = await BooksApi.getAll();
      console.log(res);
    };
    getAll();
  }, []);
  return (
    <div className="app">
      {showSearchPage ? (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          {console.log(BooksApi.getAll())}
          <div className="list-books-content">
            <div></div>
          </div>
          <div className="open-search">
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
