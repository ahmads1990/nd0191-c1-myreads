import React, { useState } from "react";
import { ShelfChanger } from "./ShelfChanger";
import PropTypes from "prop-types";

export const Book = ({
  id,
  title,
  authors,
  backgroundUrl,
  intialShelf,
  changeBookShelf,
}) => {
  const [shelf, setShelf] = useState(intialShelf);
  const changeShelf = (e) => {
    setShelf(e);
    changeBookShelf({ id }, e);
  };
  //console.log("testing book id " + id);
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

        {Array.isArray(authors) && authors.length != 0 && (
          <div className="book-authors">
            {authors.map((author, index) => {
              return (
                <div key={index}>
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

Book.propTypes = {
  id: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.array,
  backgroundUrl: PropTypes.string.isRequired,
  intialShelf: PropTypes.string.isRequired,
  changeBookShelf: PropTypes.func.isRequired,
};
