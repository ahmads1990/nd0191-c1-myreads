import React, { useEffect, useState } from "react";
import { BookShelf } from "./BookShelf/BookShelf";
import * as BooksApi from "../BooksAPI";
export const ListBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  //console.log(intialBooks);
  const shelfs = ["none", "currentlyReading", "wantToRead", "read"];
  var currentlyReading = [];
  var wantToRead = [];
  var read = [];

  const addValue = (v, book) => [...v, book];
  useEffect(() => {
    const getAll = async () => {
      const res = await BooksApi.getAll();
      //console.log(res);
      setAllBooks(res);
    };
    getAll();
    console.log(allBooks);
    sortBooksToShelfs(allBooks);
  }, []);

  const sortBooksToShelfs = (intialBooks) => {
    currentlyReading = [];
    wantToRead = [];
    read = [];
    intialBooks.map((book) => {
      switch (book.shelf) {
        case shelfs[1]:
          currentlyReading.push(book);
          console.log("test " + currentlyReading);
          break;
        case shelfs[2]:
          wantToRead.push(book);
          break;
        case shelfs[3]:
          read.push(book);
          break;
        default:
      }
    });
  };
  sortBooksToShelfs(allBooks);
  console.log("aayayaya" + allBooks);
  /*console.log("intialBooks");
  console.log(intialBooks);
  console.log("currentlyReading");
  console.log(currentlyReading);
  console.log("wantToRead");
  console.log(wantToRead);
  console.log("read");
  console.log(read);
  */
  //onClick={() => setShowSearchpage(!showSearchPage)}
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf
          books={currentlyReading}
          title={"Currently Reading"}
          shelf={shelfs[1]}
        ></BookShelf>
        <BookShelf
          books={wantToRead}
          title={"Want to Read"}
          shelf={shelfs[2]}
        ></BookShelf>
        <BookShelf books={read} title={"Read"} shelf={shelfs[3]}></BookShelf>
      </div>
      <div className="open-search">
        <a>Add a book</a>
      </div>
    </div>
  );
};
