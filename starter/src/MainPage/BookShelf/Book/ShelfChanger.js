import React, { useState } from "react";
import PropTypes from "prop-types";

export const ShelfChanger = ({ currentShelf, changeShelf }) => {
  const shelves = [
    { id: '0', shelfName: 'currentlyReading', shelfDisplayName: 'Currently Reading' },
    { id: '1', shelfName: 'wantToRead', shelfDisplayName: 'Want to Read' },
    { id: '2', shelfName: 'read', shelfDisplayName: 'Read' },
    { id: '3', shelfName: 'none', shelfDisplayName: 'None' },]
  return (
    <div>
      <div className="book-shelf-changer">
        <select
          onChange={(event) => {
            changeShelf(event.target.value);
          }}
          defaultValue={currentShelf}
        >
          <option disabled>
            Move to...
          </option>
          {shelves.map((shelve) => <option key={shelve.id} value={shelve.shelfName}>{shelve.shelfDisplayName}</option>)}
        </select>
      </div>
    </div>
  );
};

ShelfChanger.propTypes = {
  currentShelf: PropTypes.string.isRequired,
  changeShelf: PropTypes.func.isRequired,
};
