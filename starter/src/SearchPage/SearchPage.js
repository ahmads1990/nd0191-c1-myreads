import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as BooksApi from "../BooksAPI";
import { useEffect } from "react";
import { Book } from "../MainPage/BookShelf/Book/Book";
import PropTypes from "prop-types";

export const SearchPage = ({ mainBooks, addNewBook }) => {
  const maxQuery = 30;
  const [query, setQuery] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      const res = await BooksApi.search(query, maxQuery);
      //console.log(res);
      //search the query books if one of them is on the main shelf update its state
      mainBooks.map((myBook) =>
        res.map((target) =>
          target.id === myBook.id ? (target.shelf = myBook.shelf) : target
        )
      );
      setSearchBooks(res);
    };
    //
    if (query != "") {
      getAll();
    }
    //console.log(searchBooks);
  }, [query]);
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to={"/"}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {Array.isArray(searchBooks) &&
            searchBooks.map((book, index) => {
              const url =
                "imageLinks" in book
                  ? "thumbnail" in book.imageLinks
                    ? book.imageLinks.thumbnail
                    : ""
                  : "";
              return (
                <Book
                  id={book.id}
                  title={book.title}
                  authors={book.authors}
                  backgroundUrl={url}
                  index={index}
                  intialShelf={book.shelf}
                  changeBookShelf={addNewBook}
                ></Book>
              );
            })}
        </ol>
      </div>
    </div>
  );
};
SearchPage.propTypes = {
  mainBooks: PropTypes.array.isRequired,
  addNewBook: PropTypes.func.isRequired,
};
