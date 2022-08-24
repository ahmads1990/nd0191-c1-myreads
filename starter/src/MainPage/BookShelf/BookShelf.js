import React, { useState } from "react";
import { Book } from "./Book/Book";

export const BookShelf = ({ books, title, shelf }) => {
  return (
    <div>
      {console.log("hahahaha ")}
      {console.log(books)}
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book, index) => {
              return (
                <Book
                  title={book.title}
                  authors={book.authors}
                  backgroundUrl={book.imageLinks.thumbnail}
                  index={index}
                  intialShelf={shelf}
                ></Book>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};
