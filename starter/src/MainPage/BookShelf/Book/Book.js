import React, { useState } from "react";
import { ShelfChanger } from "./ShelfChanger";

export const Book = ({ title, authors, backgroundUrl }) => {
  const [shelf, setShelf] = useState("none");
  const changeShelf = (newShelf) => setShelf(newShelf);

  return (
    <li>
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
        {authors != [] && (
          <div className="book-authors">
            {
              <ol>
                {authors.map((author) => {
                  <li>author</li>;
                })}
              </ol>
            }
          </div>
        )}
      </div>
    </li>
  );
};
