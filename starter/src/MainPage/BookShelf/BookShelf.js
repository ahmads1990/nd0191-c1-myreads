import React from "react";
import { Book } from "./Book/Book";

export const BookShelf = ({ books, title, shelf, updateListShelf }) => {
  return (
    <div>
      {console.log("hahahaha ")}
      {console.log(books)}
      <div className="bookshelf">
        {title !== "" && <h2 className="bookshelf-title">{title}</h2>}
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, index) => {
              const url =
                "imageLinks" in book ?
                  "thumbnail" in book.imageLinks ?
                    book.imageLinks.thumbnail : ""
                  : ""
              return (
                <Book
                  id={book.id}
                  title={book.title}
                  authors={book.authors}
                  backgroundUrl={url}
                  index={index}
                  intialShelf={book.shelf}
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
