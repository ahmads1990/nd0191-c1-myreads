import { Link } from "react-router-dom";
import { BookShelf } from "./BookShelf/BookShelf";
import PropTypes from "prop-types";

export const ListShelfs = ({ allBooks, updateListShelf }) => {
  const shelfs = ["none", "currentlyReading", "wantToRead", "read"];
  var currentlyReading = [];
  var wantToRead = [];
  var read = [];

  const sortBooksToShelfs = (intialBooks) => {
    currentlyReading = [];
    wantToRead = [];
    read = [];
    intialBooks.map((book) => {
      //console.log(book);
      switch (book.shelf) {
        case shelfs[1]:
          currentlyReading.push(book);
          //console.log("test " + currentlyReading);
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
          updateListShelf={updateListShelf}
        ></BookShelf>
        <BookShelf
          books={wantToRead}
          title={"Want to Read"}
          updateListShelf={updateListShelf}
        ></BookShelf>
        <BookShelf
          books={read}
          title={"Read"}
          updateListShelf={updateListShelf}
        ></BookShelf>
      </div>
      <div className="open-search">
        <Link to={"/search"}>Add a book</Link>
      </div>
    </div>
  );
};

ListShelfs.propTypes = {
  allBooks: PropTypes.array.isRequired,
  updateListShelf: PropTypes.func.isRequired,
};
