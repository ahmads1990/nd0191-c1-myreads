import React, { useState } from "react";
import { ShelfChanger } from "./ShelfChanger";

export const Book = ({
  id,
  title,
  authors,
  backgroundUrl,
  index,
  intialShelf,
  changeBookShelf,
}) => {
  const [shelf, setShelf] = useState(intialShelf);
  const changeShelf = (e) => {
    setShelf(e);
    changeBookShelf({ id }, e);
  };
  return (
    <li key={index}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${backgroundUrl}")`,
            }}
          ></div>
          <ShelfChanger
            currentShelf={shelf}
            changeShelf={changeShelf}
          ></ShelfChanger>
        </div>
        {title != "" && <div className="book-title">{title}</div>}

        {Array.isArray(authors) && authors.length != 0 && (
          <div className="book-authors">
            {authors.map((author) => {
              return (
                <div>
                  <span>{author}</span>
                  <br></br>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </li>
  );
};
