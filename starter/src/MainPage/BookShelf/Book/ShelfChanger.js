import React, { useState } from "react";
import PropTypes from "prop-types";

export const ShelfChanger = ({ currentShelf, changeShelf }) => {
  return (
    <div>
      <div className="book-shelf-changer">
        <select
          onChange={(event) => {
            changeShelf(event.target.value);
          }}
          defaultValue={currentShelf}
        >
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
  );
};

ShelfChanger.propTypes = {
  currentShelf: PropTypes.string.isRequired,
  changeShelf: PropTypes.func.isRequired,
};
