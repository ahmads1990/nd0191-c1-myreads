import React from "react";
import { BookShelf } from "./BookShelf/BookShelf";

export const ListBooks = () => {
  const shelfs = ["none", "currentlyReading", "wantToRead", "read"];
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>;
      </div>

      <BookShelf
        books={[]}
        title={"Currently Reading"}
        shelf={shelfs[1]}
      ></BookShelf>
      <BookShelf
        books={[]}
        title={"Want to Read"}
        shelf={shelfs[2]}
      ></BookShelf>
      <BookShelf books={[]} title={"Read"} shelf={shelfs[3]}></BookShelf>
    </div>
  );
};
