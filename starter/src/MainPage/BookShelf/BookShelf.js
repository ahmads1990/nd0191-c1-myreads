import React from "react";
import { Book } from "./Book/Book";
import PropTypes from "prop-types";

export const BookShelf = ({ books, title, updateListShelf }) => {
  return (
    <div>
      <div className="bookshelf">
        {title !== "" && <h2 className="bookshelf-title">{title}</h2>}
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, index) => {
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
                  intialShelf={book.shelf}
                  backgroundUrl={url}
                  changeBookShelf={updateListShelf}
                ></Book>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  updateListShelf: PropTypes.func.isRequired,
};
